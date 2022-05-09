import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {AiOutlineGithub} from "react-icons/ai"

const StyledAllProjects = styled.section`
    background-color: #251D3A;
    padding: 2.5em;
    height: 100vh;
`

const AllProjectsTitle = styled.h1`
  margin-top: 80px;
  color: #9FBAF5;
  font-size: 1.8em;
  text-align: left;
`

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: left;
`

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
`


const AllProjects = () => {

    return (
        <>
            <Navbar />
            <StyledAllProjects>
            
                <AllProjectsTitle>
                    All Projects
                </AllProjectsTitle>
                <ProjectList>
                    <Project>
                        <ProjectTitle>1. This Website</ProjectTitle>
                        <ProjectLinks>
                            <AiOutlineGithub />
                        </ProjectLinks>
                    </Project>
                    <Project>
                        <ProjectTitle>1. This Website</ProjectTitle>
                        <ProjectLinks>
                            <AiOutlineGithub />
                        </ProjectLinks>
                    </Project>
                    <Project>
                        <ProjectTitle>1. This Website</ProjectTitle>
                        <ProjectLinks>
                            <AiOutlineGithub />
                        </ProjectLinks>
                    </Project>
                    
                </ProjectList>
                <StyledFooter>
                    <Footer />
                </StyledFooter>
            </StyledAllProjects>
        </>
        
    )
}

export default AllProjects;