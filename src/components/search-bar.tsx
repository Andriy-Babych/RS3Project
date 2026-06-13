export default function SearchBar() {
    return (
        <header className="App-header p-8 w-full rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Search for Your favourite Films</h1>
            <form action="submit" className="search-form flex gap-4 items-center">
                <input type="text" placeholder="Search..." className="search-input p-4 border-2 border-solid border-gray-300 rounded-lg w-lg" />
                <button className="search-button py-4 px-6 rounded-lg font-bold text-lg">Search</button>
            </form>
        </header>
    )
}