import type { MovieData } from "../types.ts"
import loadingImage from "../assets/loading_blue.png"


type ResultsSectionProps = {
    movies: MovieData[];
    isLoading: boolean;
    error: string | null;
    hasSearched: boolean;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

import FilmCard from "./FilmCard"

export default function ResultsSection({ movies, isLoading, error, hasSearched, currentPage, totalPages, onPageChange }: ResultsSectionProps) {

    return (
        <main className="App-main p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {isLoading ? (
                    <div className="col-span-full flex flex-col items-center justify-center gap-4 py-12">
                        <img
                            src={loadingImage}
                            alt="Loading"
                            className="h-20 w-20 animate-spin object-contain"
                        />
                        <p className="text-lg text-gray-500">Loading movies...</p>
                    </div>
                ) : error ? (
                    <div className="col-span-full flex min-h-48 items-center justify-center py-12">
                        <p className="text-lg text-red-500">{error}</p>
                    </div>
                ) : hasSearched && movies.length === 0 ? (
                    <div className="col-span-full flex min-h-48 items-center justify-center py-12">
                        <p className="text-lg text-gray-500">
                            {hasSearched ? "No movies found." : "Top rated movies will appear here."}
                        </p>
                    </div>
                ) : movies.length > 0 ? movies.map((movie) => (
                    <FilmCard key={movie.id} movie={movie} />
                )) : (
                    <p className="text-lg text-gray-500">Top rated movies will appear here.</p>
                )}
            </div>
            {!isLoading && !error && movies.length > 0 && (
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 enabled:hover:bg-blue-700 transition-colors duration-300"
                    >
                        &#8592;
                    </button>

                    <span className="text-gray-400">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        type="button"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 enabled:hover:bg-blue-700 transition-colors duration-300"
                    >
                        	&#8594;
                    </button>
                </div>
            )}
        </main>
    )
}