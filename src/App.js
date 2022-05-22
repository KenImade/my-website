import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';
import TopNavigator from './components/Utils/TopNavigator';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <TopNavigator />
    </>
  );
}

export default App;
