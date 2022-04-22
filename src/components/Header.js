import { Link } from "react-router-dom";

function Header() {

    return(
        <header className="header">
            <Link to="/" className="header--link header--title"><h1>Kenneth Imade</h1></Link>
            <nav className="header--nav">
                <Link className="nav--link header--link" to="/projects">Projects</Link>
                <Link className="nav--link header--link" to="/blog">Blog</Link>
                <Link className="nav--link header--link" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;