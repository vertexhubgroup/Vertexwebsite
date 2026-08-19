import React from "react";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Useful by design",
    copy: "We start with the real problem, then shape technology around the people and processes that need it.",
  },
  {
    number: "02",
    title: "Clarity over noise",
    copy: "We turn complex information into practical insight so teams can make better decisions sooner.",
  },
  {
    number: "03",
    title: "Value that lasts",
    copy: "We build adaptable solutions that continue to serve your organization as it grows and changes.",
  },
];

const About = () => (
  <main className="about-page">
    <section className="about-hero">
      <div className="about-hero-content">
        <p className="about-eyebrow">About Vertexhub Group</p>
        <h1>Technology that makes room for better work.</h1>
        <p>We help organizations solve meaningful business challenges with thoughtful technology, useful insight, and a clear path forward.</p>
      </div>
      <div className="about-hero-stamp" aria-hidden="true"><span>V</span><small>People · Process · Progress</small></div>
    </section>

    <section className="about-story">
      <div className="about-section-label">01 / Our story</div>
      <div className="about-story-copy">
        <h2>One partner for the work behind the work.</h2>
        <p>Vertexhub Group provides automated solutions, ICT infrastructure, analytics, and technology services for organizations that want to operate with more clarity and confidence.</p>
        <p>Our approach brings together the skill and experience of our people with a practical understanding of the environments our clients work in. The result is technology that feels less like another layer to manage and more like a foundation for progress.</p>
      </div>
    </section>

    <section className="about-mission">
      <div className="mission-image" role="img" aria-label="Two professionals working together"></div>
      <div className="mission-copy">
        <p className="about-section-label">02 / Our mission</p>
        <h2>Take care of the complexity, so you can focus on the core business.</h2>
        <p>We address the pain points that slow organizations down and create cost-effective, high-quality solutions tailored to the way each client works.</p>
        <a className="about-link" href="/contact">Start a conversation <span aria-hidden="true">&#8594;</span></a>
      </div>
    </section>

    <section className="about-values">
      <div className="about-section-label">03 / What guides us</div>
      <div className="values-heading"><h2>The way we work matters.</h2><p>Good outcomes come from good working relationships.</p></div>
      <div className="values-grid">
        {values.map((value) => (
          <article className="value-item" key={value.number}>
            <span>{value.number}</span>
            <h3>{value.title}</h3>
            <p>{value.copy}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="about-partners">
      <div className="about-section-label">04 / In good company</div>
      <div className="partners-heading"><h2>Built through collaboration.</h2><p>Our partners help us extend the value we bring to every engagement.</p></div>
      <div className="about-partner-grid">
        {[logo1, logo2, logo3, logo4, logo5].map((partnerLogo, index) => (
          <div className="about-partner-item" key={index}><img src={partnerLogo} alt={`Partner ${index + 1}`} /></div>
        ))}
      </div>
    </section>
  </main>
);

export default About;
