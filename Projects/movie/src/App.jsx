import Home from "./Pages/Home"
import Fav from "./Pages/Fav"
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom"

function App(){
  return(
    <div>
      <NavBar/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="/ele" element={<Example/>} />
      </Routes>
    </main>
    </div>
  )
}



export default App

function Example() {
  return(
    <div>
      <h1 className='text-4xl m-2 bg-blue-300'>Hello sujith bro !</h1>
      <p>After many years coming to react app bro !</p>
    </div>
  )
}