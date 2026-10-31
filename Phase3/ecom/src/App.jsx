import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dummy from './components/Dummy'
import Hero from './components/Hero'
import Products from './components/Products'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Hero/>} />
                <Route path='/pro' element={<Products/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
