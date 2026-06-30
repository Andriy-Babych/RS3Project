import type { MovieData, TMDBMovie, TMDBResponse, MovieSearchResponse } from '../types.ts';

const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const getAuthHeaders = () => {
  if (!accessToken) {
    throw new Error('Missing TMDB access token');
  }
  return {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
};

const mapTMDBMovieToMovieData = (movie: TMDBMovie): MovieData => ({
  id: movie.id,
  title: movie.title,
  year: Number(movie.release_date?.split('-')[0]) || 0,
  posterUrl: movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '',
  rating: parseFloat(movie.vote_average.toFixed(1)),
  description: movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview,
});

const getTopMovies = async (page: number = 1): Promise<MovieSearchResponse> => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;

  const options = {
    method: 'GET',
    headers: getAuthHeaders(),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
  }

  const data: TMDBResponse = await response.json();

  return {
    movies: data.results.map(mapTMDBMovieToMovieData),
    currentPage: data.page,
    totalPages: data.total_pages
  };
};


export const searchMovies = async (query: string, page: number = 1): Promise<MovieSearchResponse> => {

  if (!query.trim()) {
    return getTopMovies(page);
  }

  const url =
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`;

  const options = {
    method: 'GET',
    headers: getAuthHeaders(),
  };


  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
  }

  const data: TMDBResponse = await response.json();

  const movies: MovieData[] = data.results.map(mapTMDBMovieToMovieData);

  return {
    movies,
    currentPage: data.page,
    totalPages: data.total_pages,
  };
};

