export type MovieData = {
    id: number
    title: string
    year: number
    posterUrl: string
    rating: number
    description: string
}


export type TMDBMovie = {
    id: number
    title: string
    release_date: string
    poster_path: string | null
    vote_average: number
    overview: string
}