
let {createContext, useState, useContext} = React

let themeContext = createContext()

function ThemeProvider({children}){
    let[theme, setTheme] = useState("light")
    function ToggleTheme(){
        setTheme((curr)=> (curr === "light" ? "dark" : "light"))
    }

    return(
        <themeContext.Provider value={{theme, ToggleTheme}}>
            <NavBar/>
            <Bodys/>
        </themeContext.Provider>
    )
}

let NavBar =()=>{
    let {theme, ToggleTheme} = useContext(themeContext)
    return(
        <button onClick={ToggleTheme} className={` ${theme}`}>
            Switch to : {theme === "light" ? "dark" : "light"}
        </button>
    )
}

function Bodys(){
    let {theme} = useContext(themeContext)
    return(
        <div className={` ${theme}`}>
            <h1>Hello all of the people </h1>
            <ul>
                <li>Emperor domination</li>
                <li>HuangHong</li>
                <li>A record of mortals journey to immortality</li>
            </ul>
        </div>
    )
}