import type { MovieData } from "../types.ts"

type ResultsSectionProps = {
    movies: MovieData[];
    searchQuery: string;
}

import FilmCard from "./FilmCard"

export default function ResultsSection({ movies, searchQuery }: ResultsSectionProps) {

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    return (
        <main className="App-main p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMovies.length > 0 ? filteredMovies.map((movie, index) => (
                    <FilmCard key={index} movie={movie} />
                )) : (
                    <p className="text-lg text-gray-500">No movies found.</p>
                )}
            </div>
        </main>
    )
}