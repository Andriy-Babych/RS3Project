import { useEffect } from "react";

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: (query: string) => void;
}


export default function SearchBar({ searchQuery, setSearchQuery, handleSearch }: SearchBarProps) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleSearch(searchQuery);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchQuery, handleSearch]);

    return (
        <header className="App-header p-8 w-full rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Search for Your favourite Films</h1>

            <div className="input-container flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Search..." className="search-input p-4 border-2 border-solid border-gray-300 rounded-lg w-full sm:w-lg" value={searchQuery} onChange={(e) => {
                    setSearchQuery(e.target.value);
                }} />
                {searchQuery.trim() && (
                    <button className="search-button p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300" type="button" onClick={() => setSearchQuery('')}>Delete</button>
                )}
            </div>
        </header>
    )
}