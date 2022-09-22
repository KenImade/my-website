import ProjectCard from "./components/ProjectCard";
import "./Projects.css";

const projectData = [
    {
      title: "e-commerce website",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus 
              nunc vitae bibendum tempus. Nulla porta, nunc non feugiat pharetra, elit nisi 
              dapibus lorem, vel vestibulum ex nisl eget lacus. Proin a urna id tellus congue 
              lacinia. Nullam finibus enim ex, ut dapibus nisl gravida quis. In ac erat iaculis ex 
              pretium finibus sit amet eu enim. Sed auctor venenatis nunc ut porta.`,
      tags: ["react", "express", "node", "mongoDB"],
      links: {
          gitHub: "https://github.com/KenImade/ecommerce-project",
          website: "https://kenimade.tech",
          article: "https://kenimade.tech"
      }
    },
    {
      title: "e-commerce website",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus 
              nunc vitae bibendum tempus. Nulla porta, nunc non feugiat pharetra, elit nisi 
              dapibus lorem, vel vestibulum ex nisl eget lacus. Proin a urna id tellus congue 
              lacinia. Nullam finibus enim ex, ut dapibus nisl gravida quis. In ac erat iaculis ex 
              pretium finibus sit amet eu enim. Sed auctor venenatis nunc ut porta.`,
      tags: ["react", "express", "node", "mongoDB"],
      links: {
          gitHub: "https://github.com/KenImade/ecommerce-project",
          website: "https://kenimade.tech",
          article: "https://kenimade.tech"
      }
    },
    {
      title: "e-commerce website",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus 
              nunc vitae bibendum tempus. Nulla porta, nunc non feugiat pharetra, elit nisi 
              dapibus lorem, vel vestibulum ex nisl eget lacus. Proin a urna id tellus congue 
              lacinia. Nullam finibus enim ex, ut dapibus nisl gravida quis. In ac erat iaculis ex 
              pretium finibus sit amet eu enim. Sed auctor venenatis nunc ut porta.`,
      tags: ["react", "express", "node", "mongoDB"],
      links: {
          gitHub: "https://github.com/KenImade/ecommerce-project",
          website: "https://kenimade.tech",
          article: "https://kenimade.tech"
      }
    },
]
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