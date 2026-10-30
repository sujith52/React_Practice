import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dummy from './components/Dummy'
import Hero from './components/Hero'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Hero/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
