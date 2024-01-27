import { Link } from "react-router-dom";


export function Navbar() {

    return <nav className="navbar bg-dark">
        <div className="container-fluid">
            <Link to="/people" className="navbar-brand text-white" >People</Link>
        </div>
        
    </nav>
}
