import "./About.css";
import profileImg from "./../../images/headshot.jpg";


function About() {

    return (
        <section className="about" id="about">
            <h1 className="about--title">About Me</h1> 
            <div className="about--info">              
                <div>
                    <p className="about--text">
                        Hey there, I'm Kenneth and I created this website to write and share what I've worked on
                        and what I am learning right now.
                    </p>
                    <p className="about--text">
                        I am a solution-oriented team player with a recognized aptitude for innovative thinking.
                        I am enthusiastic, responsible, and hardworking. Having worked on different projects, it has helped me to adapt to changes quickly and made me a mature team worker.
                        I can work well both in a team environment and as well as using my own initiative.
                    </p>

                    <p className="about--text">These are some of the tools I use: </p>

                    <ul className="skills--list">
                        <li className="about--text">JavaScript</li>
                        <li className="about--text">React</li>
                        <li className="about--text">Node.js</li>
                        <li className="about--text">SQL</li>
                        <li className="about--text">TypeScript</li>
                        <li className="about--text">Java</li>
                        <li className="about--text">Python</li>
                        <li className="about--text">Ruby</li>
                    </ul>
                </div>
                <img src={profileImg} alt="kenneth" className="about--img"/>
            </div>     
        </section>
    )
}

export default About;