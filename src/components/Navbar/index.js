import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./navbar.css";

function Navbar() {

    return (
        <section className="navbar">
            <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
            <Navigation />
            <MobileNavigation />
        </section>
    )
}


export default Navbar;