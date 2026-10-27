import {Route, Routes, Link} from 'react-router-dom'
import Navabar from './components/Navabar'
import About from './components/About'
import Image from './components/Image'
import UsePara from './components/UsePara'
import Navigate from './components/Navigate'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Navabar/>} />
      <Route path="/above" element={<About/>} />
      <Route path="/img" element={<Image/>} />
      <Route path="/para/:productId" element={<UsePara/>} />
      <Route path="/navs" element={<Navigate/>} />
    </Routes>
  )
}

export default App

