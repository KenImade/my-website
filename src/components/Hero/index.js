import "./Hero.css"
import heroImg from "./../../images/website-construction.gif";
import Button from "./../Utils/Button"

function Hero() {

    return (
        <section className="hero">
            <section className="left--hero--section">
                <div className="hero--text">
                    <h2 className="hero--text--welcome">Hi 👋, my name is</h2>
                    <h1 className="hero--text--name">Kenneth Imade.</h1>
                    <h2 className="hero--text--value">I build cool things on the web.</h2>
                </div>
                <Button>
                    Get In Touch
                </Button>
            </section>
            <img src={heroImg} alt="website under construction" className="hero--img"/>
        </section>
       
    )
}

export default Hero;