import './App.css'

import { useState } from 'react'

import SearchBar from './components/SearchBar'
import ResultsSection from './components/ResultSection'

import type { MovieData } from './types.ts'


function App() {
  const [searchQuerry, setSearchQuery] = useState<string>('');
  const [movies] = useState<MovieData[]>([{
    title: 'Oppenheimer',
    year: 2023,
    genre: 'Biography, Drama, History',
    posterUrl: 'https://creativereview.imgix.net/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1263&h=2000',
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
