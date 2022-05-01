import "./Hero.css"
import heroImg from "./../../images/website-construction.gif";
import Button from "../Button";


function Hero() {

    return (
        <section className="hero">
            <div className="hero--text">
                <h2 className="hero--text--welcome">Hi 👋, my name is</h2>
                <h1 className="hero--text--name">Kenneth Imade.</h1>
                <h2 className="hero--text--value">I build cool things on the web.</h2>
            </div>
            <img src={heroImg} alt="website under construction" className="hero--img"/>
            <Button>
                Get In Touch
            </Button>
        </section>
    )
}

export default Hero;