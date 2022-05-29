import './styles/index.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
// import Projects from './components/Projects';
// import Blog from './components/Blog';
// import TopNavigator from './components/Utils/TopNavigator';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      {/*<About />
      <Jobs />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <TopNavigator /> */}
    </>
  );
}

export default App;
