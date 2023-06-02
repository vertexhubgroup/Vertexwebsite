import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Careers from "./pages/Careers";
import  Footer  from "./components/Footer";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contacts />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
