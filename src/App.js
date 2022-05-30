import './styles/index.css';
// import Jobs from './components/Jobs';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from "./Pages/About"
import Posts from './components/Posts';
// import Projects from './components/Projects';
// import Blog from './components/Blog';
// import TopNavigator from './components/Utils/TopNavigator';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />}/>
        <Route path="posts" element={<Posts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
