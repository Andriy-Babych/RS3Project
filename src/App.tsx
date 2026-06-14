import './App.css'

import './api/tmdb.ts'

import { useState } from 'react'

import SearchBar from './components/SearchBar'
import ResultsSection from './components/ResultSection'
import { searchMovies } from './api/tmdb.ts'


import type { MovieData } from './types.ts'



function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieData[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className="App flex flex-col items-start my-8 mx-8 gap-8">

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <ResultsSection movies={movies} searchQuery={searchQuery} />
    </div>
  )
}

export default App
