import "../styles/PersonalDetails.css";
import { Link } from "react-router-dom";

function PersonalDetails() {

    return (
        <section className="personal-details section margin">
            <h2 className="personal-details--title">PERSONAL DETAILS</h2>

            <div>
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
        </section>
    )
}

export default PersonalDetails;