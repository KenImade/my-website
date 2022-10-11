import "./About.css";

const About = () => {
  return (
    <section className="about">
        <h1>about me</h1>

        <section className="container">
            <p>
                Hey, I'm Kenneth Imade a software engineer based in Leeds, UK. Welcome to my website, have a look around to check out
                the cool things I've built on the web and also ideas or software engineering concepts I've written about.
            </p>
            <p>
                Currently, I'm a graduate student at the University of Leeds, studying a Masters in Business analytics and Decision Sciences.
                I'm also a student at the <span><a style={{fontSize: "20px", textDecoration: "underline"}} href="https://www.alxafrica.com">ALx</a></span> software engineering bootcamp.
            </p>
            <p>
            Before this I worked at a consulting firm in Lagos Nigeria, as a Graduate intern my day to day involved working as a Software Tester and Quality Assurance Analyst.
            </p>
            <p>
                You can contact me by email at <span style={{fontWeight: "700", fontSize: "inherit"}}>kenimade91@gmail.com</span> and also through
                the following channels.

                <ul>
                    <li><a href="https://www.linkedin.com/in/kenneth-imade/">LinkedIn</a></li>
                    <li><a href="https://github.com/kenimade">Github</a></li>
                    <li><a href="https://twitter.com/kenneth1made">Twitter</a></li>
                </ul>
            </p>

            <div>
                <h2 className="title">Tools</h2>
                <hr/>

                <p>
                    I've worked with the following technologies and always open to learning new ones

                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Java</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </p>
            </div>


        </section>
    </section>
  )
}

export default About