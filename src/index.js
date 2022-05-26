import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from "react-router-dom";

import './index.css';
import App from './App';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from "./components/About"
import AllProjects from './components/AllProjects';
import Posts from './components/Posts';
import BlogPost from './components/Utils/BlogPost';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/#about" element={<About />} />
          <Route path="/#projects" element={<Projects />} />
          <Route path="/#blog" element={<Blog />}/>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:post_id" element={<BlogPost />} />
          <Route path="/#contact" element={<Contact />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </HashRouter>
    
  </React.StrictMode>
);
