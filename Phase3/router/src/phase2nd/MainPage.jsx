import React from 'react'
import {Route, Link, Outlet} from 'react-router-dom'

const MainPage = () => {
  return (
    <>
        <nav>
            <Link to="/h">Home</Link>{"|"}
            <Link to="/prod">Products</Link>
        </nav>
        <main>
            <Outlet/>
        </main>

        <footer>
            My react App 
        </footer>
    </>
  )
}

export default MainPage
