import type { MovieData, TMDBMovie } from '../types.ts';

const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const getTopMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
  }

  const data = await response.json();

  const movies: MovieData[] = data.results.map((movie: TMDBMovie) => ({
    id: movie.id,
    title: movie.title,
    year: Number(movie.release_date?.split('-')[0]) || 0,
    posterUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '',
    rating: parseFloat(movie.vote_average.toFixed(1)),
    description: movie.overview.length > 150 ? movie.overview.substring(0, 150) + '...' : movie.overview,
  }));

  return movies;
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


export const searchMovies = async (query: string) => {

  if (!query.trim()) {
    try {
      const topMovies = await getTopMovies();
      return topMovies;
    } catch (error) {
      throw new Error('Error fetching top movies');
    }
  }

  const url =
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };


  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
  }

  const data = await response.json();

  const movies: MovieData[] = data.results.map(mapTMDBMovieToMovieData);

  return movies;
};

