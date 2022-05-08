import "./Hero.css"
import heroImg from "./../../images/website-construction.gif";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {

    return (
        <section className="hero">
            <section className="left--hero--section">
                <div className="hero--text">
                    <h2 className="hero--text--welcome">Hi 👋, my name is</h2>
                    <h1 className="hero--text--name">Kenneth Imade.</h1>
                    <h2 className="hero--text--value">I build cool things on the web.</h2>
                </div>
                <button className="button">
                    <Link
                        to="#contact"
                        smooth
                        className="hero--link"
                    >
                        Let's Work Together
                    </Link>
                </button>
            </section>
            <img src={heroImg} alt="website under construction" className="hero--img"/>
        </section>
       
    )
}

export default Hero;