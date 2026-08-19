import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";

import logo from "./../vertexlogo.png";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "animate.css";
import "./QuoteAnimation.css";
import "./Home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000); // Adjust the duration of the animation
    }, 3000);

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    // Mark the component as loaded after a short delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="home-page">
      <title>Vertexhub group</title>
      <section className="home-hero">
        <div className={`hero-content ${loaded ? "animate-slide-in" : ""}`}>
          <p className="eyebrow">Technology with direction</p>
          <h1>Build what moves your business forward.</h1>
          <p className="hero-copy">
            Sustainable value through high-quality technology services and
            solutions designed around the way your organization works.
          </p>
          <a className="hero-link" href="/services">Explore our services <span aria-hidden="true">&#8594;</span></a>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>V</span></div>
        <div className="hero-scroll" aria-hidden="true"><span></span>Scroll to discover</div>
      </section>

      <section className="home-section introduction">
        <div className="section-label">01 / Our approach</div>
        <div className="intro-copy">
          <h2>Clarity for complex business challenges.</h2>
          <p>
            Vertexhub Group helps organizations understand their customers,
            improve their processes, and make confident decisions with
            analytics-led technology.
          </p>
        </div>
      </section>

      <section className="home-section capability-section">
        <div className="section-heading">
          <div className="section-label">02 / What we bring</div>
          <h2>Practical expertise.<br />Measurable momentum.</h2>
        </div>
        <div className="capability-grid">
          <article className="capability-card"><span>01</span><h3>Competitive advantage</h3><p>Turn business and technology challenges into opportunities that set you apart.</p></article>
          <article className="capability-card"><span>02</span><h3>Smarter decisions</h3><p>Use analytics and clear insight to move from questions to action with confidence.</p></article>
          <article className="capability-card"><span>03</span><h3>Built to last</h3><p>Create adaptable solutions that keep delivering value as your organization grows.</p></article>
        </div>
      </section>

      <section className="home-quote" aria-label="Vertexhub Group statement">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        <p>We transform the way organizations understand their customers and optimize the business around them.</p>
        <div className="quote-logo-wrap"><img src={logo} alt="Vertexhub Group" className={`quote-logo ${animate ? "rotate" : ""}`} /></div>
        <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
      </section>

      <section className="home-section partners-section">
        <div className="section-label">03 / In good company</div>
        <div className="partners-heading"><h2>Our partners</h2><p>Collaboration is where meaningful progress starts.</p></div>
        <div className="partner-grid">
          {[logo1, logo2, logo3, logo4, logo5].map((partnerLogo, index) => (
            <div className="partner-item" key={index}><img src={partnerLogo} alt={`Partner ${index + 1}`} /></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
