import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);
