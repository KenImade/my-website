import {HashLink as Link} from "react-router-hash-link";


function NavLinks(props) {

    return (
        <div className="nav--links">
            <Link 
                className="nav--link" 
                to="#about"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                About
            </Link>
            <Link 
                className="nav--link" 
                to="#experience"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Experience
            </Link>
            <Link 
                className="nav--link" 
                to="#projects"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Projects
            </Link>
            <Link 
                className="nav--link" 
                to="#contact"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Contact
            </Link>
        </div>
    )
}

export default NavLinks