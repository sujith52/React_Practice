import {useMovieContext} from "../context/MovieContext"

function MovieCard({movie}){
    let {isFavorite, removeFromfav, addToFav} = useMovieContext()
    let favourate = isFavorite(movie.id)
    function addFav(e) {
        e.preventDefault()
        if(favourate) removeFromfav(movie.id)
        else addToFav(movie)
    }
return (
    <div className="flex flex-col bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition mb-2 m-1">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full rounded-md" />
        <div className="flex flex-col text-center items-center justify-between">
        <button onClick={addFav} 
        className={ `mt-2   text-white p-1 rounded ${
            favourate ? 'bg-red-300' : 'bg-white-500 '
        }`}>
            💖
        </button>
        <h3 className="text-white mt-2 font-bold">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        </div>
    </div>
);
}

export default MovieCard