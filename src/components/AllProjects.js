import styled from "styled-components";
import Footer from "./Footer";
import {AiOutlineGithub} from "react-icons/ai";
import {GiNotebook} from "react-icons/gi";
import {GoLinkExternal} from "react-icons/go";
import { HashLink as Link } from "react-router-hash-link";

const StyledAllProjects = styled.section`
    background-color: #251D3A;
    min-height: 100vh;
    padding: 2.5em;
    padding-top: 0.3em;
    align-items: center;
    justify-items: center;
`

const AllProjectsTitle = styled.h1`
  color: #9FBAF5;
  font-size: 1.8em;
  text-align: center;
`

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: left;
`

const ProjectTitle = styled.h2`
    font-size: 1.3em;
    color: #4B7BE5;
    padding: 0.6em;
`

const Project = styled.div`
    padding: 0.6em;
    display: flex;
    justify-content: space-between;
`

const ProjectLinks = styled.div`
    display: flex;
    padding: 0.5em;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ProjectLink = styled.button`

    svg {
        width: 30px;
        height: auto;
        color: #4B7BE5;
    }

    svg:hover {
        color: orange;
        cursor: pointer;
    }
`

const StyledLink = styled.section`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: left;
    font-size: 0.95em;

    a {
        text-decoration: none;
        color: #9FBAF5;
    }
`


const AllProjects = () => {

    return (
        <>
            <StyledAllProjects>
                <StyledLink>
                    <Link to="/">👈 Back to HomePage</Link>
                </StyledLink>
                <AllProjectsTitle>
                    All Projects
                </AllProjectsTitle>
                <ProjectList>
                    <Project>
                        <ProjectTitle>1. This Website</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink as="a" href="#">
                                <AiOutlineGithub />
                            </ProjectLink>
                            <ProjectLink as="a" href="#">
                                <GiNotebook />
                            </ProjectLink>
                            <ProjectLink as="a" href="#">
                                <GoLinkExternal />
                            </ProjectLink>
                        </ProjectLinks>
                    </Project>
                </ProjectList>
            </StyledAllProjects>
            <Footer />
        </>
    )
}

export default AllProjects;