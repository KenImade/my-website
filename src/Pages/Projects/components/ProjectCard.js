
const ProjectCard = ({projectData}) => {

    return (
        <section className='project-card'>
            <h3 className='project-card-title'>{projectData.title}</h3>
            <p className='project-card-desc'>{projectData.desc}</p>
            {
                projectData.tags.map((tag, index) => {
                    return <span className='project-card-tag' key={index}>
                        {`#${tag} `}
                    </span>
                })
            }
            <div className='project-card-links'>
                {
                    projectData.links.gitHub !== "#" && 
                    <a 
                        href={projectData.links.gitHub}
                        target="_blank"
                        rel="noreferrer"
                    >
                        github
                    </a>
                }
                {
                    projectData.links.website !== "#" && 
                    <a 
                        href={projectData.links.website}
                        target="_blank"
                        rel="noreferrer"
                    >
                        website
                    </a>
                }
                {
                    projectData.links.article !== "#" && 
                    <a 
                        href={projectData.links.article}
                        target="_blank"
                        rel="noreferrer"
                    >
                        article
                    </a>
                }
            </div>
        </section>
    )
}

export default ProjectCard