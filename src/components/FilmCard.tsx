import type { MovieData } from "../types"

type FilmCardProps = {
    movie: MovieData
}

export default function FilmCard({ movie }: FilmCardProps) {
    return (
        <div className="card p-4 border-2 border-solid border-gray-300 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-600">Release Year: {movie.year}</p>
            <p className="text-gray-600">Genre: {movie.genre}</p>
            <p className="text-gray-600">Rating: {movie.rating}/10</p>
        </div>
    )
}
