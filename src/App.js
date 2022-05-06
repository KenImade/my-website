import './App.css';
import About from './components/About';
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
    </>
  );
}

export default App;
