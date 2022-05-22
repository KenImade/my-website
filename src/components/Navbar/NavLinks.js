import {HashLink as Link} from "react-router-hash-link";


function NavLinks(props) {

    return (
        <div className="nav--links">
            <Link 
                className="nav--link" 
                to="#about"
                smooth
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                About
            </Link>
            <Link 
                className="nav--link" 
                to="#experience"
                smooth
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Experience
            </Link>
            <Link 
                className="nav--link" 
                to="#projects"
                smooth
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Projects
            </Link>
            <Link 
                className="nav--link" 
                to="#blog"
                smooth
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Blog
            </Link>
            <Link 
                className="nav--link" 
                to="#contact"
                smooth
                onClick={()=> props.isMobile && props.closeMobileMenu()}
            >
                Contact
            </Link>
        </div>
    )
}

export default NavLinks