import styled from "styled-components";
import Banner from "../components/Utils/Banner";
import StyledLink from "../components/Utils/Link";
import gitImg from "../images/git.jpg";
import StyledSection from "./../components/Utils/StyledSection";
import {SiDatabricks} from "react-icons/si";
// import {GrCloudComputer} from "react-icons/gr";
import {BsFileCode} from "react-icons/bs";
import FadeIn from "../components/Utils/FadeIn";

const PortfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px;
    ${'' /* max-width: 90%; */}

    .project-list  {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .project-card {
        display: flex;
        align-items: center;
        width: 80%;
        gap: 40px;
        margin: 30px 0;

        .project-img {
            width: 150px;
            height: auto;
            border-radius: 50%;
        }

        .project-info {

            .project-title {
                
                margin-bottom: 20px;

                a {
                    font-size: 1.2rem;
                    color: var(--headers-color);
                }
            }

            p {
                margin: 10px 0px;
                color: var(--secondary-color);
            }
        }

        .project-links {
            display: flex;
            margin-top: 20px;
            gap: 0.5rem;
        }
    }

    @media(max-width: 780px) {
        padding: 20px;


        .project-card {
            display: flex;
            flex-direction: column;
            max-width: 100%;

            .project-info {
               p, .project-title {
                   text-align: center;
               }

               .project-links {
                   display: flex;
                   align-items: center;
                   justify-content: center;
               }
            }
        }
    }
`

const ProjectStyledSection = styled(StyledSection)`
    .project-section-title-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
    }

    .project-section-title {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 15px;

        svg {
            margin-left: 10px;
        }
    }

    @media(max-width: 780px) {
        margin: 0;

        svg {
            height: 60px;
            width: 60px;
        }
    }
`

function Portfolio() {

    return (
        <>
            <Banner text="Portfolio" />
            <PortfolioSection>
                <FadeIn>
                    <ProjectStyledSection>
                        <FadeIn>
                            <div className="project-section-title-info">
                                <SiDatabricks size="30px" />
                                <h1 className="project-section-title">Data Engineering</h1>
                            </div>
                            <div className="project-list">
                                <div className="project-card">
                                    <a
                                        href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                            <img src={gitImg} alt="git" className="project-img"/>
                                    </a>
                                    <div className="project-info">
                                        <h3 className="project-title"><a href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria">
                                            Predicting the Price of Used Cars in Nigeria</a>
                                        </h3>
                                        <p>
                                            This aim of this project was to use data gotten from the Cars45 website to predict the price of a used car in Nigeria
                                        </p>
                                        <div className="project-links">
                                            <StyledLink link="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria" text="Github" />
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card">
                                    <a href="https://github.com/OmdenaAI/omdena-nigeria-energy"><img src={gitImg} alt="git" className="project-img"/></a>
                                    <div className="project-info">
                                        <h3 className="project-title"><a href="https://github.com/OmdenaAI/omdena-nigeria-energy">
                                        A.I for Energy: Transitioning Toward a Sustainable Energy System</a>
                                        </h3>
                                        <p>
                                           Lead a team of six contributors to extract and clean datasets which were used in the
                                           training of the machine learing model that would be identifying populated areas with little
                                           or no electricity in Nigeria.
                                        </p>
                                        <div className="project-links">
                                            <StyledLink link="https://github.com/OmdenaAI/omdena-nigeria-energy" text="Github" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="project-section-title-info">
                                <BsFileCode size="30px" />
                                <h1 className="project-section-title">Programming</h1>
                            </div>
                            <div className="project-list">
                                <div className="project-card">
                                    <a href="https://github.com/KenImade/blackjack"><img src={gitImg} alt="git" className="project-img"/></a>
                                    <div className="project-info">
                                        <h3 className="project-title"><a href="https://github.com/KenImade/blackjack">
                                            Blackjack</a>
                                        </h3>
                                        <p>
                                            Built the popular blackjack card game to solidify my understanding of Java
                                        </p>
                                        <div className="project-links">
                                            <StyledLink link="https://github.com/KenImade/blackjack" text="Github" />
                                            <StyledLink link="https://replit.com/@KenImade/blackjack#.replit" text="Replit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        {/* <FadeIn>
                            <div className="project-section-title-info">
                                <GrCloudComputer size="30px" />
                                <h1 className="project-section-title">Cloud Computing</h1>
                            </div>
                            <div className="project-list">
                                <div className="project-card">
                                    <a 
                                        href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                            <img src={gitImg} alt="git" className="project-img"/>
                                    </a>
                                    <div className="project-info">
                                        <h3 className="project-title"><a href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria">
                                            Predicting the Price of Used Cars in Nigeria</a>
                                        </h3>
                                        <p>
                                            A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance.
                                            (I didn't want to forget the instance was running and lose money)
                                        </p>
                                        <p>Kenneth Imade on May 31, 2022</p>
                                        <div className="project-links">
                                            <StyledLink link="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria" text="Github" />
                                            <StyledLink link="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria" text="Github" />
                                            <StyledLink link="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria" text="Github" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn> */}
                    </ProjectStyledSection>
                </FadeIn>
            </PortfolioSection>
        </>
    )
}

export default Portfolio;