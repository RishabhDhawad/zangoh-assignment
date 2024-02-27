import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import About from "./pages/About";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;