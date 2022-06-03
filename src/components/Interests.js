import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";
import {AiOutlineCloud} from "react-icons/ai";
import {FiDatabase} from "react-icons/fi";
import {MdOutlineWebAsset} from "react-icons/md";
import FadeIn from "./Utils/FadeIn";

const InterestsSection = styled(StyledSection)`
    .interests--title {
        font-size: 2.5rem;
        text-align: center;
    }

    .interests--sub-title {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 15px;
        font-weight: 300;
    }

    .interests-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-top: 50px;
        gap: 1.2rem;


        .interest-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;

            p {
                text-align: center;
                color: var(--secondary-color);
            }
        }
    }

    @media (max-width: 780px) {
        .interests-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
        }

        .interest-card {
            margin-bottom: 0.5rem;
        }
    }
`

function Interests() {

    return (
        <FadeIn>
            <InterestsSection>
                <h2 className="interests--title">Areas of Interests</h2>
                <p className="interests--sub-title">Take a look at some of the things I'm working on</p>

                <div className="interests-list">
                    <div className="interest-card">
                        <AiOutlineCloud size="50px"/>
                        <h3>Cloud Computing</h3>
                        <p>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>

                    <div className="interest-card">
                        <FiDatabase size="50px"/>
                        <h3>Data Engineering</h3>
                        <p>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>

                    <div className="interest-card">
                        <MdOutlineWebAsset size="50px"/>
                        <h3>Web Development</h3>
                        <p>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                </div>
            </InterestsSection>
        </FadeIn>
    )
}

export default Interests;