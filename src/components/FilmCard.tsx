import type { MovieData } from "../types"

type FilmCardProps = {
    movie: MovieData
}

export default function FilmCard({ movie }: FilmCardProps) {
    return (
        <div
            className="card relative overflow-hidden p-4 border-2 border-solid border-gray-300 rounded-lg "
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${movie.posterUrl})` }}
            />

            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                <p className="text-(--color-text-secondary)">Release Year: {movie.year}</p>
                <p className="text-(--color-text-secondary)">Genre: {movie.genre}</p>
                <p className="text-(--color-text-secondary)">Rating: {movie.rating}/10</p>
            </div>
        </div>
    )
}
