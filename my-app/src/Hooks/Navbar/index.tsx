import { Link, Outlet } from "react-router-dom";


function Navbar() {

    return <nav className="navbar bg-dark mb-3">
        <div className="container-fluid">
            <Link to="/people" className="navbar-brand text-white" >People</Link>
        </div>
        
    </nav>
}


export default Navbar;
