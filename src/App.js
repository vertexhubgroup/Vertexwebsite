import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
         {/* <About /> */}
         <Services/>
      </BrowserRouter>
    </>
  );
}

export default App;
