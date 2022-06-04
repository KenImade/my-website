import NavLinks from "./NavLinks";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useState } from "react";

function MobileNavigation() {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const hamburgerIcon = <AiOutlineMenu 
                                className="hamburger--menu"  
                                size="30px" 
                                color="#222222"
                                onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
                            />

    const closeIcon = <AiOutlineCloseCircle 
                            className="hamburger--menu"  
                            size="30px" 
                            color="#222222"
                            onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
                        />

    const closeMobileMenu = () => {
        setDisplayMobileMenu(false)
    }

    return (
        <nav className="mobile--nav">
            {displayMobileMenu ? closeIcon : hamburgerIcon}
            {displayMobileMenu && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNavigation;