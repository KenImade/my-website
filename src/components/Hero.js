import "../styles/Hero.css"
import heroImg from "../images/headshot.jpg";
import { Link } from "react-router-dom";

function Hero() {

    return (
        <section className="hero margin section">
            <section className="left--hero--section">
                <div className="hero--text">
                    <h2 className="hero--text--welcome">I am</h2>
                    <h1 className="hero--text--name">Kenneth Imade.</h1>
                    <h2 className="hero--text--value">I solve problems using code.</h2>
                </div>
                <Link
                    to="/projects"
                    className="hero--link"
                >
                    MY PROJECTS
                </Link>
            </section>
            <img src={heroImg} alt="website under construction" className="hero--img"/>
        </section>
       
    )
}

export default Hero;