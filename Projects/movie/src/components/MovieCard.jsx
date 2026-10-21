function MovieCard({movie}){
    function addFav() {
        
    }
return (
    <div className="flex flex-col bg-slate-800 hover:bg-slate-700 p-4 rounded-lg transition mb-2 m-1">
        <img src={movie.url} alt={movie.title} className="w-full rounded-md" />
        <div className="flex text-center items-center justify-between">
        <button onClick={addFav} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            💖
        </button>
        <h3 className="text-white mt-2 font-bold">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        </div>
    </div>
);
}

export default MovieCard