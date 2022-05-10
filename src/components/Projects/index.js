import "./Projects.css";
import styled from "styled-components";
import projImg1 from "./../../images/website-snip.jpg";
import { Link } from "react-router-dom";
import ProjectLinks from "../Utils/ProjectLinks";



const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #382960;
    height: auto;
    width: 250px;
    padding: 0.5em;
    border-radius: 20px;
`

function Projects() {

    return (
        <section className="projects" id="projects">
            <h1 className="projects--title">Some thing's I've built</h1>
            <div className="projects--list">
                <ProjectCard>
                    <div className="project--card--img">
                        <img src={projImg1} alt="this website"  />
                    </div>

                    <p className="project--card--title">This Website</p>

                    <ProjectLinks gitLink={"https://github.com/KenImade/my-website"} webLink={"https://my-website-bb37f.web.app/"}/>
                </ProjectCard>
                <ProjectCard>
                    <div className="project--card--img">
                        <img src={projImg1} alt="this website"  />
                    </div>

                    <p className="project--card--title">Meme Generator</p>

                    <ProjectLinks gitLink={"https://github.com/KenImade/meme-generator"} />
                </ProjectCard>
                <ProjectCard>
                    <div className="project--card--img">
                        <img src={projImg1} alt="this website"  />
                    </div>

                    <p className="project--card--title">Calculator</p>

                    <ProjectLinks gitLink={"https://github.com/KenImade/Calculator"} webLink={"https://kenimade.github.io/Calculator/"}/>
                </ProjectCard>
            </div>

            <button className="button">
                <Link to="/projects" className="projects--link">View All ➡️</Link>
            </button>
        </section>
    )
}

export default Projects;