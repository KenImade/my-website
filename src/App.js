import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import About from "./Pages/About"
import TopNavigator from "./components/Utils/TopNavigator";

function App() {

  return (
    <>
      <Navbar />
      <TopNavigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
