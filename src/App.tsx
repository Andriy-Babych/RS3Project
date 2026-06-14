import './App.css'

import { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar'
import ResultsSection from './components/ResultSection'
import { searchMovies } from './api/tmdb.ts'


import type { MovieData } from './types.ts'



function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const topMovies = await searchMovies('');
        setMovies(topMovies);
      } catch (error) {
        console.error('Error fetching top movies:', error);
        setError('Error fetching top movies');
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('Error searching movies');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }


  return (
      <div className="App flex flex-col items-start my-8 mx-8 gap-8">

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
        <ResultsSection movies={movies} searchQuery={searchQuery} isLoading={isLoading} error={error} />
      </div>
    )
}

export default App
