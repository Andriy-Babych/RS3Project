import './App.css'

import SearchBar from './components/search-bar'
import ResultsSection from './components/results-section'

function App() {
  return (
    <div className="App flex flex-col items-start my-8 mx-8 gap-8">
      
      <SearchBar />
      <ResultsSection />
    </div>
  )
}

export default App
