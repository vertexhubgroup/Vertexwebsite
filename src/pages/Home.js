import logo from "./../vertexlogo.png";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";
import boxed from "./../boxed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faQuote } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";

import "animate.css";
import "./QuoteAnimation.css"; // Import the CSS file for the animation

import bren from "./../bren.jpg";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000); // Adjust the duration of the animation
    }, 3000);

    return () => clearInterval(animationInterval);
  }, []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Mark the component as loaded after a short delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <title>Vertexhb group</title>
      <div>
        <div className="content">
          <div>
            <div className={`abouthome ${loaded ? "animate-slide-in" : ""}`}>
              <strong>
                <h1>
                  We aim to deliver sustainable value by providing high quality
                  technology services and solutions.
                </h1>
              </strong>
            </div>

            <div className="blue"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="middlecontent">
        <br />

        <h1>Why Vertexhubgroup?</h1>
        <h5>
          We are a leading provider of analytics software,solutions and services
          that transform the way organizations understand their customers and
          optimize business processes around them.
        </h5>
      </div>

      <div className="quotes">
        <strong>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="fa-quote-left"
            flip
            style={{ paddingLeft: "90px" }}
          />

          {/* <span>"</span> */}
        </strong>
        <p>
          we are a leading provider of analytics software,solutions and services
          that transform <br />
          the way organizations understand their customers and optimize business
          processes around them.
        </p>
        <img
          src={logo}
          alt="logo" style={{alignItems:"center",paddingRight:"80px"}}
          className={`image ${animate ? "rotate" : ""}`}
        />{" "}
        <strong>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="fa-quote-right"
            flip
          />
        </strong>{" "}
      </div>
      <div className="cards">
        <div className="card">
          <h4>Drive competitive advantage</h4>
          <p>
            {" "}
            We can help you drive competitive advantage by solving some of the
            major business and technology challenges that you face.
          </p>
        </div>
        <div className="card">
        <h4>Drive competitive advantage</h4>
        <p>
            {" "}
            We can help you drive competitive advantage by solving some of the
            major business and technology challenges that you face.
          </p>        </div>
        <div className="card">
        <h4>Drive competitive advantage</h4>
        <p>
            {" "}
            We can help you drive competitive advantage by solving some of the
            major business and technology challenges that you face.
          </p>        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Patners</h2>
      <br />
      <div class="grid-container">
        <div class="grid-item">
          <img src={logo1} alt="Your Image" className="logos" />
        </div>
        <div class="grid-item">
          {" "}
          <img src={logo2} alt="Your Image" className="logos" />
        </div>
        <div class="grid-item">
          {" "}
          <img src={logo3} alt="Your Image" className="logos" />
        </div>
        <div class="grid-item">
          {" "}
          <img src={logo4} alt="Your Image" className="logos" />
        </div>
        <div class="grid-item">
          {" "}
          <img src={logo5} alt="Your Image" className="logos" />
        </div>
      </div>
      <br/>
    </>
  );
};

export default Home;
