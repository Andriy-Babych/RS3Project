import type { MovieData } from "../types.ts"

type ResultsSectionProps = {
    movies: MovieData[];
}

import FilmCard from "./FilmCard"

export default function ResultsSection({ movies }: ResultsSectionProps) {
    return (
        <main className="App-main p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie, index) => (
                    <FilmCard key={index} movie={movie} />
                ))}
            </div>
        </main>
    )
}