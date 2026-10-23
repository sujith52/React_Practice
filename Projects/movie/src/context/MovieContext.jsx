import { useState, createContext, useEffect, useContext } from "react";

let movieContext = createContext()

export let useMovieContext = ()=> useContext(movieContext)

export let MovieProvider =({children}) => {
    let [favor,setfavor] = useState([])
    useEffect(()=>{
        let storedFavs = localStorage.getItem('favor')

        if(storedFavs) setfavor(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favor', JSON.stringify(favor))
    },[favor])

    let addToFav = (movie) =>{
        setfavor(prev => [...prev, movie])
    }    

    let removeFromfav = (movieId) =>{
        setfavor(prev => prev.filter(movie => movie.id !== movieId))
    }

    let isFavorite = (movieId) => {
        return favor.some(movie => movie.id === movieId)
    }

    let value = {
        favor, addToFav, removeFromfav, isFavorite
    }

    return (
        <movieContext.Provider value={value}>
            {children}
        </movieContext.Provider>
    )
}