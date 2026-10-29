import {Route, Routes, Link} from 'react-router-dom'
import Navabar from './components/Navabar'
import About from './components/About'
import Image from './components/Image'
import UsePara from './components/UsePara'
import Navigate from './components/Navigate'

import ProtectedRoutes from './phase2nd/ProtectedRoutes'
import NotFoundPage from './phase2nd/NotFoundPage'
import MainPage from './phase2nd/MainPage'
import { lazy, Suspense } from 'react'

let Dashboard = lazy(()=> import('./phase2nd/Dashbard'))

import RegisterForm from './zod/RegisterForm'
import ErroredPage from './zod/ErroredPage'

import Env from './last3/Env'
import ReuseLoading from './last3/ReuseLoading'

import Page1 from './shadcn/Page1'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Navabar/>} />
      <Route path="/navbar" element={<Navabar/>} />
      <Route path="/above" element={<About/>} />
      <Route path="/img" element={<Image/>} />
      <Route path="/para/:productId" element={<UsePara/>} />
      <Route path="/navs" element={<Navigate/>} />

      <Route element={<ProtectedRoutes/>}>
          {/* <Route path="/dashboard" element={<Dashbard/>} /> */}
          <Route path="/profile" element={<h1>Hello user !</h1>} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
      <Route element={<MainPage/>}>
        <Route path='/h' element={<h1 className='text-6xl '>Hello home page </h1>} />
        <Route path='/prod' element={<h1>Hello products !</h1>} />
      </Route>

      <Route path='/home' element={<h1>Home pages</h1>} />
      <Route path='/dash' element={
        <Suspense fallback={<div className='text-5xl p-4'>Loading Dashboard</div>}>
          <Dashboard/>
        </Suspense>
      } />

      <Route path='/zod' element={<RegisterForm/>} />
      <Route path='/error' element={<ErroredPage/>} />
      <Route path='/env' element={<Env/>} />
      <Route path='/button' element={<ReuseLoading/>} />
      <Route path='/shad' element={<Page1/>} />
    </Routes>
  )
}

export default App

