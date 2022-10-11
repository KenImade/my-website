import ProjectCard from "./components/ProjectCard";
import projectData from "./projectData.json";
import "./Projects.css";

const Projects = () => {

  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-list">
        {
          projectData.map((project, index) => {
            return <ProjectCard projectData={project} key={index}/>
          })
        }    
      </div>
    </section>
  )
}

export default Projects