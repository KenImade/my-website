import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {

    return (
        <section className="navbar">
            <Link to="/"><h3 className="logo">K. Imade</h3></Link>
            <Navigation />
            <MobileNavigation />
        </section>
    )
}


export default Navbar;