import {Route, Routes, Link} from 'react-router-dom'
import Navabar from './components/Navabar'
import About from './components/About'
import Image from './components/Image'
import UsePara from './components/UsePara'
import Navigate from './components/Navigate'

import ProtectedRoutes from './phase2nd/ProtectedRoutes'
import Dashbard from './phase2nd/Dashbard'
import NotFoundPage from './phase2nd/NotFoundPage'
import MainPage from './phase2nd/MainPage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Navabar/>} />
      <Route path="/above" element={<About/>} />
      <Route path="/img" element={<Image/>} />
      <Route path="/para/:productId" element={<UsePara/>} />
      <Route path="/navs" element={<Navigate/>} />

      <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashbard/>} />
          <Route path="/profile" element={<h1>Hello user !</h1>} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
      <Route element={<MainPage/>}>
        <Route path='/h' element={<h1 className='text-6xl '>Hello home page </h1>} />
        <Route path='/prod' element={<h1>Hello products !</h1>} />
      </Route>
    </Routes>
  )
}

export default App

