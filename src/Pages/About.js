import profileImg from "./../images/headshot.jpg";
import styled from "styled-components";
import Banner from "../components/Utils/Banner";
import StyledSection from "../components/Utils/StyledSection"
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";


const AboutSection = styled.section`

    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    padding: 70px 50px;
    border-radius: 15px;

    
    .about--img {
        height: 400px;
        width: auto;
        object-fit: cover;
        border-radius: 0.5em;
    }

    .experience-section {
        text-align: center;
        
        .experience-section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .timeline {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--background-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }

        .container {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;
        }

        .container::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -17px;
            background-color: var(--background-color);
            border: 4px solid #FF9F55;
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }

        .left {
            left: 0;
        }

        .right {
            left: 50%;
        }

        .left::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            right: 30px;
            border: medium solid var(--background-color);
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent var(--background-color);
        }

        .right::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            left: 30px;
            border: medium solid var(--background-color);
            border-width: 10px 10px 10px 0;
            border-color: transparent var(--background-color) transparent transparent;
        }

        .right::after {
            left: -16px;
        }

        .content {
            padding: 20px 30px;
            background-color: var(--background-color);
            position: relative;
            border-radius: 6px;

            h2, p {
                margin: 10px;
            }

            h2 {
                font-size: 1.4rem;
            }

            p {
                font-size: 1.2rem;
            }
        }
        
    }

    .faq-section {
        margin-top: 80px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .faq-section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .accordion {
            width: 80%;
        }

        .accordion-item {
            background-color: var(--background-color);
            border-radius: .4rem;
            margin-bottom: 1rem;
            padding: 1 rem;
            box-shadow: .5rem 2px .5rem 2px rgba(0,0,0,.1);
        }

        .accordion-link {
            font-size: 1.4rem;
            color: rgba(255, 255, 255, ,.8);
            text-decoration: none;
            background-color: var(--primary-color);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem;
        }

        .answer {
            max-height: 0;
            overflow: hidden;
            position: relative;
            background-color: var(--background-color);
            transition: max-height 650ms;
        }

        ${'' /* .answer::before {
            content: "";
            position: absolute;
            width: .6rem;
            height: 90%;
            background-color: var(--background-color);
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        } */}

        .answer p {
            padding: 1rem 2rem;
            color: var(--secondary-color);
            text-align: left;
            line-height: 25px;
            font-size: 1.2rem;
            border-left: 2px solid var(--hover-color);
        }

        .accordion-item:target .answer {
            max-height: 100rem;
        }

        .accordion-item:target svg {
            display: none;
        }

    }

    @media (max-width: 780px) {

        margin: 0px;
        padding: 0px;

        .experience-section {
            margin-top: 80px;
            /* Place the timelime to the left */
            .timeline::after {
                left: 30px;
            }

            /* Full-width containers */
            .container {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }

            /* Make sure that all arrows are pointing leftwards */
            .container::before {
                left: 60px;
                border: medium solid var(--background-color);
                border-width: 10px 10px 10px 0;
                border-color: transparent var(--background-color) transparent transparent;
            }

            /* Make sure all circles are at the same spot */
            .left::after, .right::after {
                left: 15px;
            }

            /* Make all right containers behave like the left ones */
            .right {
                left: 0%;
            }
        }

        .faq-section {
            margin-bottom: 80px;
        }
        
    }
`

const ProfileSection = styled(StyledSection)`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 90px;

    .intro {
        display: flex;
        gap: 80px;
    }

    .about--texts {
        margin-top: 30px;

        .about--text {
            line-height: 25px;
            text-align: left;
            color: var(--secondary-color);
            font-size: 1.2rem;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        margin-left: 80px;
        gap: 40px;

        h1 {
            font-size: 2.3rem;
        }

        h3 {
            color: var(--secondary-color);
            font-size: 1.1rem;
        }

        a {
            font-size: 1.2rem;
            background-color: var(--hover-color);
            padding: 0.7rem;
            text-align: center;
            color: var(--primary-color);
            border-radius: 5px;
            transition: 0.5s all;
        }

        a:hover {
            background-color: var(--headers-color);
        }
    }

    @media (max-width: 780px) {
        margin: 0;
        padding: 0;

        .intro, .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        .about--texts .about--text {
            padding: 0.4rem 1.5rem;
            text-align: center;
        }

        .about--img {
            margin-top: 3rem;
            max-height: auto;
            max-width: 300px;
        }
    }
`


function About() {

    return (
        <>
            <Banner text="ABOUT ME"/>
            <AboutSection>
                <ProfileSection>
                    <div className="intro">
                        <img src={profileImg} alt="kenneth" className="about--img"/>
                        <div className="info">
                            <h1>PERSONAL DETAILS</h1>
                            <h3>Here's some info about me</h3>
                            <div><a href="#faq">About Me</a></div>
                        </div>
                    </div>
                    <div className="about--texts">
                        <p className="about--text">
                                Hey there, I'm Kenneth and I created this website to write and share what I've worked on
                                and what I am learning right now.
                        </p>
                        <p className="about--text">
                            I am a solution-oriented team player with a recognized aptitude for innovative thinking.
                            I am enthusiastic, responsible, and hardworking. Having worked on different projects, it has helped me to adapt to changes quickly and made me a mature team worker.
                            I can work well both in a team environment and as well as using my own initiative.
                        </p>
                    </div>
                </ProfileSection>
                <div className="experience-section">
                    <h3 className="experience-section-title">MY EXPERIENCE</h3>
                    <div class="timeline">
                        <div class="container left">
                            <div class="content">
                                <h2>Bachelor in Mechancial Engineering</h2>
                                <p>Covenant University December 2020</p>
                                <p>GPA: 3.50 (On a scale of 4.0)</p>
                            </div>
                        </div>
                        <div class="container right">
                            <div class="content">
                                <h2>Junior Machine Learning Engineer</h2>
                                <p>Omdena</p>
                                <p>June 2021 - August 2021</p>
                            </div>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="content">
                            <h2>QA Analyst</h2>
                            <p>Verraki Africa</p>
                            <p>July 2021 - Present</p>
                        </div>
                    </div>
                </div>
                <br id="faq"/>
                <div className="faq-section">
                   
                    <h3 className="faq-section-title" >Any Questions?</h3>
                    <div className="accordion">
                        <div className="accordion-item" id="question1">
                            <a className="accordion-link" href="#question1">
                                How long have you been programming?
                            </a>
                            <div className="answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra leo. Fusce urna nulla, malesuada vitae volutpat nec, placerat at diam. Morbi semper, turpis vitae varius vestibulum, leo est tincidunt magna, sit amet rutrum sem sapien in orci.
                                    Nullam eu enim quis massa ultricies dictum. Etiam magna quam, consequat eget nibh non, convallis finibus purus. Sed dapibus ipsum vitae dui blandit iaculis. Donec quis maximus erat.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-item" id="question2">
                            <a className="accordion-link" href="#question2">
                                How long have you been programming?
                            </a>
                            <div className="answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra leo. Fusce urna nulla, malesuada vitae volutpat nec, placerat at diam. Morbi semper, turpis vitae varius vestibulum, leo est tincidunt magna, sit amet rutrum sem sapien in orci.
                                    Nullam eu enim quis massa ultricies dictum. Etiam magna quam, consequat eget nibh non, convallis finibus purus. Sed dapibus ipsum vitae dui blandit iaculis. Donec quis maximus erat.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-item" id="question3">
                            <a className="accordion-link" href="#question3">
                                How long have you been programming?
                            </a>
                            <div className="answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra leo. Fusce urna nulla, malesuada vitae volutpat nec, placerat at diam. Morbi semper, turpis vitae varius vestibulum, leo est tincidunt magna, sit amet rutrum sem sapien in orci.
                                    Nullam eu enim quis massa ultricies dictum. Etiam magna quam, consequat eget nibh non, convallis finibus purus. Sed dapibus ipsum vitae dui blandit iaculis. Donec quis maximus erat.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-item" id="question4">
                            <a className="accordion-link" href="#question4">
                                How long have you been programming?
                            </a>
                            <div className="answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra leo. Fusce urna nulla, malesuada vitae volutpat nec, placerat at diam. Morbi semper, turpis vitae varius vestibulum, leo est tincidunt magna, sit amet rutrum sem sapien in orci.
                                    Nullam eu enim quis massa ultricies dictum. Etiam magna quam, consequat eget nibh non, convallis finibus purus. Sed dapibus ipsum vitae dui blandit iaculis. Donec quis maximus erat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutSection>
        </>
    )
}

export default About;