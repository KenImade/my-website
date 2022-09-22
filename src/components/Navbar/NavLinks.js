import { NavLink } from "react-router-dom";

function NavLinks(props) {

    return (
        <div className="nav--links">
            <NavLink 
                to="/"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
                className={({isActive}) =>
                    isActive ? "nav--link active" : "nav--link"
                }
            >
                Home
            </NavLink>
            <NavLink 
                to="/about"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
                className={({isActive}) =>
                    isActive ? "nav--link active" : "nav--link"
                }
            >
                About
            </NavLink>
            <NavLink 
                to="/projects"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
                className={({isActive}) =>
                    isActive ? "nav--link active" : "nav--link"
                }
            >
                Projects
            </NavLink>
            <NavLink 
                to="/blog"
                onClick={()=> props.isMobile && props.closeMobileMenu()}
                className={({isActive}) =>
                    isActive ? "nav--link active" : "nav--link"
                }
            >
                Blog
            </NavLink>

            <a 
                href="https://drive.google.com/file/d/1kGrbaAUOwzSZwM0IUgincA7dmyjabq2m/view?usp=sharing" 
                target="_blank"
                rel="noreferrer"
                className="nav--link"
            >
                Résumé
            </a>
        </div>
    )
}

export default NavLinks