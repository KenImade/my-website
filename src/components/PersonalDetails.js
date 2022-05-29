import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";


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
        font-size: 1.2rem;
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
            font-size: 4vw;
            text-align: left;
            line-height: 18px;
        }
    }
`

function PersonalDetails() {

    return (
        <PersonalDetailsSection>
            <h2 className="personal-details--title">PERSONAL DETAILS</h2>

            <div className="personal-details--text--div">
                <p className="personal-details--text">
                    A few interesting things about me. I love to read science fiction (my favorite is Frank Herbert's Dune).
                    I am also an avid gamer. I love to play competitive strategy games and first-person shooters.
                    Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering,
                    or miscellaneous facts about the universe.
                </p>

                <p className="personal-details--text">
                    On top of recently getting married and graduating with a masters in computer science from UT Dallas, 
                    I also recently started working as a senior data scientist at Capital One. My work mainly revolves 
                    around utilizing natural language processing to build a more intelligent customer experience.
                </p>
            </div>

            <Link
                to="/about"
                className="personal-details--link"
            >
                ABOUT ME
            </Link>
        </PersonalDetailsSection>
    )
}

export default PersonalDetails;