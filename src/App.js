import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
// import Careers from "./pages/Careers";
import  Footer  from "./components/Footer";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Terms_of_service from "./pages/Terms_of_service";
import Privacy_policy from "./pages/Privacy_policy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/careers" element={<Careers />} /> */}

        <Route path="/contact" element={<Contacts />} />
        <Route path="/" element={<Terms_of_service />} />
        <Route path="/" element={<Privacy_policy />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
