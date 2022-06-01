import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";
import {DiPython, DiJava, DiLinux} from "react-icons/di";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {SiJavascript} from "react-icons/si";


const SkillSection = styled(StyledSection)`
    .skills--title {
        font-size: 2.5rem;
        text-align: center;
    }

    .skills--list {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        margin-top: 50px;
        gap: 1.2rem;
    }

    .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-conten: center;
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
        color: var(--secondary-color);
        margin-top: 10px;
    }
`

function Skills () {

    return (
        <SkillSection>
            <h2 className="skills--title">Skills Expertise</h2>
            <div className="skills--list">
                <div className="skill-card">
                    <DiPython size="60px"/>
                    <h4 className="skill-title">Python</h4>
                </div>
                <div className="skill-card">
                    <AiOutlineConsoleSql size="60px"/>
                    <h4 className="skill-title">SQL</h4>
                </div>
                <div className="skill-card">
                    <DiJava size="60px"/>
                    <h4 className="skill-title">Java</h4>
                </div>
                <div className="skill-card">
                    <SiJavascript size="60px"/>
                    <h4 className="skill-title">JavaScript</h4>
                </div>
                <div className="skill-card">
                    <DiLinux size="60px"/>
                    <h4 className="skill-title">Linux</h4>
                </div>
            </div>
        </SkillSection>
    )
}

export default Skills;