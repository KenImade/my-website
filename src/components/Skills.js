import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";

const SkillSection = styled(StyledSection)`
    .skills--title {
        font-size: 2.5rem;
        text-align: center;
    }

    .skills--list {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-top: 50px;
        gap: 1.2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ul li {
        color: var(--secondary-color);
    }

    .skill-title {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 20px;
        color: var(--header-color);
    }

    @media (max-width: 780px) {
        .skills--list {
            display: flex;
            flex-direction: column;
        }
    }
`

function Skills () {

    return (
        <SkillSection>
            <h2 className="skills--title">Skills Expertise</h2>
            <div className="skills--list">
                <div className="skill-card">
                    <h4 className="skill-title">Data Engineering</h4>
                    <ul>
                        <li>Data Extraction</li>
                        <li>Data Cleaning</li>
                        <li>Data Warehousing</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h4 className="skill-title">Data Engineering</h4>
                    <ul>
                        <li>Data Extraction</li>
                        <li>Data Cleaning</li>
                        <li>Data Warehousing</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h4 className="skill-title">Data Engineering</h4>
                    <ul>
                        <li>Data Extraction</li>
                        <li>Data Cleaning</li>
                        <li>Data Warehousing</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </SkillSection>
    )
}

export default Skills;