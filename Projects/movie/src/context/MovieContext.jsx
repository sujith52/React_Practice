import { useState, createContext, useEffect, useContext } from "react";

let movieContext = createContext()

export let useMovieContext = ()=> useContext(movieContext)

export let MovieProvider =() => {}