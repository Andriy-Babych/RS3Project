type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}


export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
    return (
        <header className="App-header p-8 w-full rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Search for Your favourite Films</h1>

            <input type="text" placeholder="Search..." className="search-input p-4 border-2 border-solid border-gray-300 rounded-lg w-full sm:w-lg" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />


        </header>
    )
}