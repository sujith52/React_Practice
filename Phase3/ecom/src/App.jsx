import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dummy from './components/Dummy'
import Hero from './components/Hero'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Hero/>} />
                <Route path='/pro' element={<Products/>} />
                <Route path='/pro/:id' element={<SingleProduct/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
