import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
