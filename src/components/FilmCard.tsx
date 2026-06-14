import type { MovieData } from "../types";

type FilmCardProps = {
  movie: MovieData;
};

export default function FilmCard({ movie }: FilmCardProps) {
  return (
    <div className="group relative h-72 overflow-hidden rounded-2xl border border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      <div className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
        ⭐ {movie.rating}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-4">
        <h3 className="mb-2 text-xl font-bold leading-tight">
          {movie.title}
        </h3>

        <p className="mb-2 text-sm text-slate-300">
          {movie.year}
        </p>

        {movie.description && (
          <p className="line-clamp-3 text-sm text-slate-200">
            {movie.description}
          </p>
        )}
      </div>
    </div>
  );
}