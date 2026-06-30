import './App.css'

import { useState, useEffect, useCallback } from 'react'

import SearchBar from './components/SearchBar'
import ResultsSection from './components/ResultSection'
import { searchMovies } from './api/tmdb.ts'


import type { MovieData } from './types.ts'



function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchTopMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchMovies('');
        setMovies(results.movies);
        setCurrentPage(results.currentPage);
        setTotalPages(results.totalPages);
      } catch (error) {
        console.error('Error fetching top movies:', error);
        setError(error instanceof Error ? error.message : 'Error fetching top movies');
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  const handleSearch = useCallback(async (query: string, page: number = 1) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(query.trim().length > 0);

    try {
      const results = await searchMovies(query, page);
      setMovies(results.movies);
      setCurrentPage(results.currentPage);
      setTotalPages(results.totalPages);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError(error instanceof Error ? error.message : 'Error searching movies');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handlePageChange = (page: number) => {
    handleSearch(searchQuery, page);
  };

  return (
    <div className="App flex flex-col items-start my-8 mx-8 gap-8">

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <ResultsSection movies={movies} isLoading={isLoading} error={error} hasSearched={hasSearched} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default App
