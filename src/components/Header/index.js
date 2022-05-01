import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./index.css";

function Header() {

    return(
        <header className="header">
            <Link to="/" className="header--link header--title"><img src={logo} alt="logo" className="logo"/></Link>
            <nav className="header--nav">
                <Link className="nav--link header--link" to="/about">About</Link>
                <Link className="nav--link header--link" to="/experience">Experience</Link>
                <Link className="nav--link header--link" to="/projects">Projects</Link>
                <Link className="nav--link header--link" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;