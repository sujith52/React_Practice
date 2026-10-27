const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;



function ReactRouter(){
    return(
        <>
         <Routes>
            <Route path="/" element={<Home/>} />
         </Routes>
        </>
    )
}

function Home(){
    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

let cont = document.getElementById("root")
let root = ReactDOM.createRoot(cont)
root.render(
    <>
        <BrowserRouter>
            <ReactRouter/>
        </BrowserRouter>
    </>
)