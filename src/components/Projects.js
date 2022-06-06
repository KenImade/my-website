import styled from "styled-components";
import StyledSection from "./Utils/StyledSection";
import projImg1 from "./../images/website-snip.jpg";
import cloudImg from "./../images/cloud.jpg";
import omdenaImg from "./../images/omdena.png";
import FadeIn from "./Utils/FadeIn";

const ProjectSection = styled(StyledSection)`
    .projects--title {
        font-size: 2.5rem;
        text-align: center;
    }

    .projects--sub-title {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 15px;
        font-weight: 300;
    }

    .projects--list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.2rem;
        margin-top: 60px;
        align-items: center;
        justify-content: center;
    }

    .project--card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
    }

    .project--card img {
        width: 300px;
        height: 200px;
    }

    .project--card--title {
        color: var(--headers-color);
        font-size: 1.2rem;
        text-align: center;
        height: 40px;
        margin-top: 10px;
    }

    .project--card--title:hover {
        color: var(--hover-color);
        font-weight: bold;
    }


    .project--card--desc {
        color: var(--secondary-color);
        font-size: 1.1rem;
        width: auto;
        text-align: center;
    }

    @media(max-width: 780px) {
        .projects--list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
        }

        .project--card {
            margin-bottom: 1.5rem;
        }
    }
`

function Projects() {

    return (
        <FadeIn>
        <ProjectSection>
            <h2 className="projects--title">Latest Projects</h2>
            <p className="projects--sub-title">Take a look at my recent projects.</p>
            <div className="projects--list">
                <div className="project--card">
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@kenimade91/how-to-deploy-a-static-website-to-the-cloud-using-amazon-s3-bucket-and-cloudfront-23db00572199">
                        <img src={cloudImg} alt="project-title"/>
                    </a>
                    <hr/>
                    <a className="project--card--title"
                        href="https://medium.com/@kenimade91/how-to-deploy-a-static-website-to-the-cloud-using-amazon-s3-bucket-and-cloudfront-23db00572199"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Deploying a static website to the cloud
                    </a>
                    <p className="project--card--desc">
                        Utilizing AWS resources, S3 bucket and CloudFront. 
                        I learnt how to deploy a static website to the cloud.
                    </p>
                </div>
                <div className="project--card">
                    <a target="_blank" rel="noreferrer" href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria">
                        <img src={projImg1} alt="project-title"/>
                    </a>
                    <hr/>
                    <a className="project--card--title"
                        href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Predicting the Price of Used Cars in Nigeria
                    </a>
                    <p className="project--card--desc">
                        The aim of this project was to use data gotten from a popular nigerian car dealer website (Cars45) to predict the price of a used car in Nigeria
                    </p>
                </div>
                <div className="project--card">
                    <a target="_blank" rel="noreferrer" href="https://github.com/OmdenaAI/omdena-nigeria-energy">
                        <img src={omdenaImg} alt="project-title"/>
                    </a>
                    <hr/>
                    <a className="project--card--title"
                        href="https://github.com/OmdenaAI/omdena-nigeria-energy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        A.I for Energy: Transitioning Toward a Sustainable Energy System
                    </a>
                    <p className="project--card--desc">
                        Open source project that utilized machine learning to identify areas with little or no electricity
                        in Nigeria.
                    </p>
                </div>
            </div>
        </ProjectSection>
        </FadeIn>
    )
}

export default Projects;