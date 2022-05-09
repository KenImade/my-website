import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';
import App from './App';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from "./components/About"
import AllProjects from './components/AllProjects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/#about" element={<About />} />
          <Route path="/#projects" element={<Projects />} />
          <Route path="/#blog" element={<Blog />}/>
          <Route path="/#contact" element={<Contact />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);
