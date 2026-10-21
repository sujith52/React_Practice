let API_Key = "97dd9a080753ea112bff7533c3d4b49e"
// this is just a movie api key so the person hane any ill intent then sorry bro it was not that  worth amn !

let BASE_URL = "/api"

export let getPopularMovies = async ()=>{
    let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_Key}`)
    let data = await response.json()
    return data.results
}

export let searchMovies = async (query)=>{
    let response = await fetch(`${BASE_URL}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(query)}`)
    let data = await response.json()
    return data.results
}

