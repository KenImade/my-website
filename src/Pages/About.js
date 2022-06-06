import profileImg from "./../images/headshot.jpg";
import styled from "styled-components";
import Banner from "../components/Utils/Banner";
import StyledSection from "../components/Utils/StyledSection"
import FadeIn from "../components/Utils/FadeIn";


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
            z-index: -999;
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
            right: -12px;
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
            left: -12px;
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

        h3 {
            font-size: 1.4rem;
        }

        .about--text {
            line-height: 25px;
            text-align: left;
            color: var(--secondary-color);
            font-size: 1.2rem;
            margin-bottom: 5px;
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
            <Banner text="About Me"/>
            <AboutSection>
                <FadeIn>
                <ProfileSection>
                    <div className="intro">
                        <img src={profileImg} alt="kenneth" className="about--img"/>
                        <div className="info">
                            <h1>PERSONAL DETAILS</h1>
                            <h3>Here's some info about me</h3>
                            <div><a href="#faq">About Me</a></div>
                        </div>
                    </div>
                    <FadeIn>
                        <div className="about--texts">
                            <h3>My Journey So Far...</h3>
                            <p className="about--text">
                                During my undergraduate internship I worked at Chevron's office in Lagos Nigeria, I worked in a department that
                                dealt with optimizing the processes used in company projects. One of my projects was to gather data on oil wells
                                this would be used in the creation of a Microsoft PowerBI dashboard which would aid in tracking the performance of
                                oil wells owned by the company. This singular experience sparked my interest into the world of analytics.
                            </p>
                            <p className="about--text">
                                After graudating, I decided to take the IBM Data Analytics program offered on Coursera. With that knowledge I volunteered
                                at Omdena on a machine learning project. Currently, I now work as a Technology Solutions Intern with a consulting firm based
                                in Lagos and continue to get exposed to more aspects of software development.
                            </p>
                        </div>
                    </FadeIn>
                </ProfileSection>
                </FadeIn>
                <FadeIn>
                <div className="experience-section">
                    <h3 className="experience-section-title">MY EXPERIENCE</h3>
                    <div class="timeline">
                        <FadeIn>
                        <div class="container left">
                            <div class="content">
                                <a 
                                    href="https://www.covenantuniversity.edu.ng"
                                    target="_blank" rel="noreferrer"
                                >
                                    <h2>Bachelor in Mechancial Engineering</h2>
                                    <p>Covenant University December 2020</p>
                                    <p>GPA: 3.50 (On a scale of 4.0)</p>
                                </a>
                            </div>
                        </div>
                        </FadeIn>
                        <FadeIn>
                            <div class="container right">
                                <div class="content">
                                    <a 
                                        href="https://www.omdena.com"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <h2>Junior Machine Learning Engineer</h2>
                                        <p>Omdena</p>
                                        <p>June 2021 - August 2021</p>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div class="container left">
                                <div class="content">
                                    <a 
                                        href="https://www.verraki.africa" 
                                        target="_blank" rel="noreferrer"
                                    >
                                        <h2>Technology Solutions Intern</h2>
                                        <p>
                                            
                                                Verraki Africa
                                            
                                        </p>
                                        <p>July 2021 - Present</p>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                </FadeIn>
                <br id="faq"/>
                <FadeIn>
                    <div className="faq-section">
                    
                        <h3 className="faq-section-title" >Any Questions?</h3>
                        <div className="accordion">
                            <div className="accordion-item" id="question1">
                                <a className="accordion-link" href="#question1">
                                    Why did you create this website?
                                </a>
                                <div className="answer">
                                    <p>
                                        The main reason I created this website was to expand my knowledge in the software engineering space and
                                        also because of my job. At my current job we are constantly encouraged to learn something new and that 
                                        spurred me to take on a course in web development.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="accordion-item" id="question2">
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
                            </div> */}
                        </div>
                    </div>
                </FadeIn>
            </AboutSection>
        </>
    )
}

export default About;