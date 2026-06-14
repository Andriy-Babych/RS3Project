import type { MovieData } from "../types.ts"


type ResultsSectionProps = {
    movies: MovieData[];
    searchQuery: string;
    isLoading: boolean;
    error: string | null;
}

import FilmCard from "./FilmCard"

export default function ResultsSection({ movies, searchQuery, isLoading, error }: ResultsSectionProps) {

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    return (
        <main className="App-main p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    <p className="text-lg text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-lg text-red-500">{error}</p>
                ) : filteredMovies.length > 0 ? filteredMovies.map((movie) => (
                    <FilmCard key={movie.id} movie={movie} />
                )) : (
                    <p className="text-lg text-gray-500">No movies found.</p>
                )}
            </div>
        </main>
    )
}