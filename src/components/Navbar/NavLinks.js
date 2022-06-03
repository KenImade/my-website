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
                to="/portfolio"
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

            <a 
                href="https://drive.google.com/file/d/1kGrbaAUOwzSZwM0IUgincA7dmyjabq2m/view?usp=sharing" 
                target="_blank"
                rel="noreferrer"
                className="nav--link"
            >
                Resume
            </a>
        </div>
    )
}

export default NavLinks