import './App.css'

function App() {
  return (
    <div className="App flex flex-col items-start my-8 mx-8 gap-8">
      <header className="App-header p-8 w-full rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Search for Your favourite Films</h1>
        <form action="submit" className="search-form flex gap-4 items-center">
          <input type="text" placeholder="Search..." className="search-input p-4 border-2 border-solid border-gray-300 rounded-lg w-lg" />
          <button className="search-button py-4 px-6 rounded-lg font-bold text-lg">Search</button>
        </form>

      </header>

      <main className="App-main p-8 rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card p-4 border-2 border-solid border-gray-300 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">Film Title</h3>
            <p className="text-gray-600">Release Year: 2022</p>
            <p className="text-gray-600">Genre: Action, Adventure</p>
            <p className="text-gray-600">Rating: 4.5/5</p>
          </div>
          <div className="card p-4 border-2 border-solid border-gray-300 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">Film Title</h3>
            <p className="text-gray-600">Release Year: 2021</p>
            <p className="text-gray-600">Genre: Comedy, Drama</p>
            <p className="text-gray-600">Rating: 4.2/5</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
