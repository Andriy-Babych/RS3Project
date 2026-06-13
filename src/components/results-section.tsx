import FilmCard from "./film-card"

export default function ResultsSection() {
    return (
        <main className="App-main p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
            </div>
        </main>
    )
}