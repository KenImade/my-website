import Hero from "../components/Hero";
import Interests from "../components/Interests";
import PersonalDetails from "../components/PersonalDetails";
import Project from "../components/Projects";
import Skills from "../components/Skills";


function Home () {

    return (
        <section className="section">
            <Hero />
            <PersonalDetails />
            <Interests />
            <Skills />
            <Project />
        </section>
    )
}

export default Home;