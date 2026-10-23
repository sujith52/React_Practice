import {useMovieContext} from "../context/MovieContext"
import MovieCard from "../components/MovieCard"
function Fav(){
    let {favor} = useMovieContext()

    if(favor){
        return(
            <div>
                <h2 className="text-3xl text-blue-950 p-1 m-1 ">Your's Favorate List :</h2>
                <div className="movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4 ">
                {favor.map(movie => (
                    (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
            </div>
        )
    }
    return(
        <div>
            <h3>There is no fav </h3>
            <p>please add movies to the list !</p>
        </div>
    )
}

export default Fav