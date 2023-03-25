import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Landing from "./components/LandingPage/Landing";
import Contact from "./components/Contact/Contact";
import Algos from "./components/AlgoBlog/Algos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/algo" element={<Algos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
