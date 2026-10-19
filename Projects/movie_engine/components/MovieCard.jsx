function MovieCard({movie}){
    function addFav() {
        
    }
    return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 border border-slate-800">
        {/* Movie Poster & Overlay Container */}
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950">
            <img 
                src={movie.url} 
                alt={movie.title} 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay with Favorite Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-4">
                <button 
                    onClick={addFav}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-rose-500/20 hover:border-rose-500/50 active:scale-95"
                    title="Add to Favorites"
                >
                    <span className="text-lg">💖</span>
                </button>
            </div>
        </div>

        {/* Movie Info */}
        <div className="flex flex-1 flex-col justify-between p-4 bg-slate-900">
            <h3 className="text-base font-semibold text-slate-100 line-clamp-1 group-hover:text-purple-400 transition-colors">
                {movie.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
                {movie.release_date}
            </p>
        </div>
    </div>
);
}