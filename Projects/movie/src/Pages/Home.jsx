import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'
import {getPopularMovies, searchMovies} from "../sevices/api"

function Home(){
    let [search, setSearch] = useState("")
    let [movies,setMovies] = useState([])
    let [err,setErr] = useState(null)
    let [load,setLoad] = useState(true)
    useEffect(()=>{
        let popularmovies = async ()=>{
            try{
                let popularmovdata = await getPopularMovies()
                setMovies(popularmovdata)
            } catch (e){
                setErr(`the fetching has been failed bro`)
                console.log(e);
            }
            finally{
                setLoad(false)
            }
        }
        popularmovies()
    },[])

    function handlefunc(e){
        e.preventDefault()
        console.log(`hello bros `)
        alert(search)
    }

    return(
        <div className="home bg-blue-200  ">
            <form onSubmit={handlefunc} className="flex text-center items-center justify-center">
                <input type="text" 
                placeholder="Enter the movie name.." 
                value={search}
                onChange={(e)=> {  setSearch(e.target.value)}}
                className="p-1 px-6 m-2 border-2 border-blue-500 rounded-xl"
                />
                <button type="submit"
                className=" p-1 px-6 m-2 bg-red-400 rounded-xl"
                >Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(search) && (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
        </div>
    )
}

export default Home;