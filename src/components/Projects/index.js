import "./Projects.css";
import styled from "styled-components";
import projImg1 from "./../../images/website-snip.jpg";

import {SiReact, SiWebpack, SiJavascript, SiHtml5} from "react-icons/si"
import Button from "../Utils/Button";



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

                    <div className="project--card--tools">
                        <SiHtml5 className="card--logo" />
                        <SiReact className="card--logo"/>
                        <SiWebpack className="card--logo" />
                        <SiJavascript className="card--logo" />
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="project--card--img">
                        <img src={projImg1} alt="this website"  />
                    </div>

                    <p className="project--card--title">This Website</p>

                    <div className="project--card--tools">
                        <SiHtml5 className="card--logo" />
                        <SiReact className="card--logo"/>
                        <SiWebpack className="card--logo" />
                        <SiJavascript className="card--logo" />
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="project--card--img">
                        <img src={projImg1} alt="this website"  />
                    </div>

                    <p className="project--card--title">This Website</p>

                    <div className="project--card--tools">
                        <SiHtml5 className="card--logo" />
                        <SiReact className="card--logo"/>
                        <SiWebpack className="card--logo" />
                        <SiJavascript className="card--logo" />
                    </div>
                </ProjectCard>
            </div>

            <Button>
                See More Projects ➡️
            </Button>
        </section>
    )
}

export default Projects;