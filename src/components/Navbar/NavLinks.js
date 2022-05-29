import { Link } from "react-router-dom";

function NavLinks(props) {

    return (
        <div className="nav--links">
            <Link 
                className="nav--link" 
                to="/"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Home
            </Link>
            <Link 
                className="nav--link" 
                to="/about"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                About
            </Link>
            <Link 
                className="nav--link" 
                to="/projects"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Portfolio
            </Link>
            <Link 
                className="nav--link" 
                to="/blog"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Blog
            </Link>
        </div>
    )
}

export default NavLinks