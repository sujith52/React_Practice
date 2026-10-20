let {useState} = React

function Home(){
    let [search, setSearch] = useState("")

    let movies = [
    { id: 1, title: 'Inception', release_date: 2010 },
    { id: 2, title: 'The Matrix', release_date: 1999 },
    { id: 3, title: 'Interstellar', release_date: 2014 },
    { id: 4, title: 'The Dark Knight', release_date: 2008 },
    { id: 5, title: 'Pulp Fiction', release_date: 1994 },
    { id: 6, title: 'Fight Club', release_date: 1999 },
    { id: 7, title: 'Forrest Gump', release_date: 1994 },
    { id: 8, title: 'The Godfather', release_date: 1972 }
];

    function handlefunc(e){
        e.preventDefault()
        console.log(`hello bros `)
        alert(search)
    }

    return(
        <div className="home bg-blue-200 ">
            <form onSubmit={handlefunc}>
                <input type="text" 
                placeholder="Enter the movie name bro .." 
                value={search}
                onChange={(e)=> {  setSearch(e.target.value)}}
                />
                <button type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(search) && (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
        </div>
    )
}