let cont = document.getElementById('root')
let root = ReactDOM.createRoot(cont)

let movieNum  = 1
root.render(
    <>
        <MovieCard movie={{title:'Sujith sreejas',
             url:'https://github.com/sujith52/Python_Practice/blob/main/Basic%20Python/File%20Handling/file_handling.jpg?raw=true',
              release_date:'6 July 2026'}} />
        {movieNum == 2 ? (<MovieCard movie={{title:'Sujith sreejas',
             url:'https://github.com/sujith52/Python_Practice/blob/main/Basic%20Python/File%20Handling/file_handling.jpg?raw=true',
              release_date:'6 July 2026'}} />) 
        :
        (<h1>Hello Sujith bro it is not movie num {movieNum}</h1>)
        }
        
        {movieNum == 1 && (<h1>hello to the react world bros !</h1>)}
    </>
)