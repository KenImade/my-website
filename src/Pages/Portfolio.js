import styled from "styled-components";
import Banner from "../components/Utils/Banner";
import gitImg from "../images/git.jpg";

const PortfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px;

    .project-card {
        display: flex;
        align-items: center;
        max-width: 70%;
        gap: 40px;

        .project-img {
            width: 200px;
            height: auto;
        }
    }
`

function Portfolio() {

    return (
        <>
            <Banner text="Portfolio" />
            <PortfolioSection>
                <div className="project-card">
                    <a href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria"><img src={gitImg} alt="git" className="project-img"/></a>
                    <div className="project-info">
                        <h3><a href="https://github.com/KenImade/predicting_the_price_of_used_cars_in_Nigeria">
                            Predicting the Price of Used Cars in Nigeria</a>
                        </h3>
                        <p>
                            A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance.
                            (I didn't want to forget the instance was running and lose money)
                        </p>
                        <p>Kenneth Imade on May 31, 2022</p>
                    </div>
                </div>
            </PortfolioSection>
        </>
    )
}

export default Portfolio;