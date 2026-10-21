import {Link} from "react-router-dom"

function NavBar(){
    return(
        <nav className="flex justify-between bg-blue-200  ">
            <div className="m-2 p-2 text-xl  hover:text-red-600 text-green-800">
                <Link to="/">Movie App</Link>
            </div>
            <div className="text-xl m-2 p-2 ">
                <Link className="mr-2 hover:text-red-600" to="/">Home</Link>
                <Link className="hover:text-red-600 " to="/fav">Fav</Link>
            </div>
        </nav>
    )
}

export default NavBar