import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// how am i going to build this website???
// 1. home page
// 2. projects page
// 3. blog page
// 4. contact page
// 5. coming soon page

export default App;
