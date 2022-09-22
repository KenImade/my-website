import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from "./Pages/About/About"
import TopNavigator from "./components/Utils/TopNavigator";
import SharedLayout from './components/SharedLayout/SharedLayout';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <TopNavigator />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />}/>
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
