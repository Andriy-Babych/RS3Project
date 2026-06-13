import './App.css'

import { useState } from 'react'

import SearchBar from './components/SearchBar'
import ResultsSection from './components/ResultSection'

import type { MovieData } from './types.ts'


function App() {
  const [searchQuerry, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieData[]>([{
    title: 'Inception',
    year: 2010,
    genre: 'Science Fiction',
    posterUrl: 'https://m.media-amazon.com/images/I/51s+6Z1k5-L._AC_.jpg',
    rating: 8.8
  }])

  return (
    <div className="App flex flex-col items-start my-8 mx-8 gap-8">

      <SearchBar searchQuery={searchQuerry} setSearchQuery={setSearchQuery} />
      <ResultsSection movies={movies} />
    </div>
  )
}

export default App
