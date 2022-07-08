import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";
import FadeIn from "./Utils/FadeIn";


const PersonalDetailsSection = styled(StyledSection)`

    .personal-details--title {
        font-size: 2.5rem;
        text-align: left;
    }

    .personal-details--text--div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0.5rem;
        border-left: 3px solid var(--hover-color);
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .personal-details--text {
        font-size: 1.1rem;
        color: var(--secondary-color);
    }

    .personal-details--link {
        text-align: center;
        color: var(--primary-color);
        background-color: var(--hover-color);
        font-size: large;
        padding: 0.8rem;
        border-radius: 10px;
        width: auto;
        transition: all 0.5s;
    }

    .personal-details--link:hover {
        background-color: var(--headers-color);
    }

    @media(max-width: 780px) {
        .personal-details--text {
            font-size: 1.1rem;
            text-align: left;
            line-height: 18px;
        }
    }
`

function PersonalDetails() {

    return (
        <FadeIn>
            <PersonalDetailsSection>
                <h2 className="personal-details--title">PERSONAL DETAILS</h2>
                <div className="personal-details--text--div">
                    <p className="personal-details--text">
                        Hi, I'm Kenneth a Software Engineer based in Lagos, Nigeria. A few interesting things about me. I love to read (my favorite is Paulo Coelho's The Alchemist),
                        I am also an avid football fan (Glory! Manchester United 🙌). Nothing beats a weekend with a good football match on air.
                    </p>
                    <p className="personal-details--text">
                        I currently work with a business consulting firm where we focus on building various software products for our clients. I currently focus on the testing and quality assurance
                        of the applications we build.
                    </p>
                    <p className="personal-details--text">
                        Lastly, I love learning. Every day I push myself to learn something new, whether that be about data engineering, software engineering,
                        or things that I think are pretty cool.
                    </p>
                </div>
                <Link
                    to="/about"
                    className="personal-details--link"
                >
                    ABOUT ME
                </Link>
            </PersonalDetailsSection>
        </FadeIn>
    )
}

export default PersonalDetails;