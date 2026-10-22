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

    let handlefunc = async (e) => {
        e.preventDefault()
        if(!search.trim()) return
        if(load) return
        setLoad(true)
        try{
            let searchResults = await searchMovies(search)
            setMovies(searchResults)
            setErr(null)
        } catch(err){
            console.log(err)
            setErr(`it was failed to load the search result !`)
        } finally{
            setLoad(false)
        }
        
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
            {err && <div><h1>{err}</h1></div>}
            {load ? (<div>Loading....</div>):
            (<div className="movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4 ">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(search) && (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>)
            }
        </div>
    )
}

export default Home;