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
import TermsOfService from "./pages/Terms_of_service";
import PrivacyPolicy from "./pages/Privacy_policy";

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
        <Route path="/Terms_of_service" element={<TermsOfService />} />
        <Route path="/Privacy_policy" element={<PrivacyPolicy />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
