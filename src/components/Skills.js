import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";
import {DiPython, DiJava, DiLinux, DiCss3} from "react-icons/di";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {SiJavascript} from "react-icons/si";
import {FaReact, FaHtml5} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import FadeIn from "./Utils/FadeIn";

const ICON_SIZE = "60px";

const SkillSection = styled(StyledSection)`
    .skills--title {
        font-size: 2.5rem;
        text-align: center;
    }

    .skills--list {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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

    .skills--sub-title {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 15px;
        font-weight: 300;
    }
`

function Skills () {

    return (
        <FadeIn>
        <SkillSection>
            <h2 className="skills--title">Tools</h2>
            <p className="skills--sub-title">Some of the tools I work with</p>
            <div className="skills--list">
                <div className="skill-card">
                    <DiPython size={ICON_SIZE}/>
                    <h4 className="skill-title">Python</h4>
                </div>
                <div className="skill-card">
                    <AiOutlineConsoleSql size={ICON_SIZE}/>
                    <h4 className="skill-title">SQL</h4>
                </div>
                <div className="skill-card">
                    <DiJava size={ICON_SIZE}/>
                    <h4 className="skill-title">Java</h4>
                </div>
                <div className="skill-card">
                    <SiJavascript size={ICON_SIZE}/>
                    <h4 className="skill-title">JavaScript</h4>
                </div>
                <div className="skill-card">
                    <DiLinux size={ICON_SIZE}/>
                    <h4 className="skill-title">Linux</h4>
                </div>
                <div className="skill-card">
                    <FaReact size={ICON_SIZE}/>
                    <h4 className="skill-title">React</h4>
                </div>
                <div className="skill-card">
                    <FiGithub size={ICON_SIZE}/>
                    <h4 className="skill-title">GitHub</h4>
                </div>
                <div className="skill-card">
                    <FaHtml5 size={ICON_SIZE}/>
                    <h4 className="skill-title">HTML</h4>
                </div>
                <div className="skill-card">
                    <DiCss3 size={ICON_SIZE}/>
                    <h4 className="skill-title">CSS</h4>
                </div>
            </div>
        </SkillSection>
        </FadeIn>
    )
}

export default Skills;