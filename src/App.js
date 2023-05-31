import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h3>This is the beginning</h3>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contacts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
