import heroImg from "../images/headshot.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";

const HeroSection = styled(StyledSection)`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin-top: 85px;

    .left--hero--section {
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 1.5em;
    }

    .left--hero--section div {
        margin-top: 20px;
    }

    .hero--img {
        height: auto;
        max-width: 40%;
        object-fit: cover;
        padding: 2.8rem;
    }

    .hero--text {
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 1.2rem;
    }

    .hero--text .hero--text--welcome {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--headers-color);
    }

    .hero--text .hero--text--name {
        font-size: 3.5rem;
        color: var(--headers-color);
    }

    .hero--text .hero--text--value {
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--secondary-color);
    }

    .hero--link {
        text-align: center;
        color: var(--primary-color);
        background-color: var(--hover-color);
        font-size: large;
        padding: 0.8rem;
        border-radius: 10px;
        transition: all 0.5s;
    }

    .hero--link:hover {
        background-color: var(--headers-color);
    }


    @media (max-width: 780px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        margin-top: 95px;


        .hero--img {
            max-width: 300px;
            height: auto;
        }

    }
`

function Hero() {

    return (
        <HeroSection>
            <section className="left--hero--section">
                <div className="hero--text">
                    <h2 className="hero--text--welcome">I am</h2>
                    <h1 className="hero--text--name">Kenneth Imade.</h1>
                    <h2 className="hero--text--value">I solve problems using code.</h2>
                </div>
                <div>
                    <Link
                        to="/portfolio"
                        className="hero--link"
                    >
                        MY PROJECTS
                    </Link>
                </div>
            </section>
            <img src={heroImg} alt="website under construction" className="hero--img"/>
        </HeroSection>
    )
}

export default Hero;