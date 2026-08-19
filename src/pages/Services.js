import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import consultancy from "./../consultancy-removebg-preview.png";
import support from "./../support.jpg";
import cloud from "./../cloud-computing-removebg-preview.png";
import hardware from "./../male-services-support-icon.png";
import development from "./../software_dev-removebg-preview.png";
import "./Services.css";

const serviceData = [
  {
    id: "consultancy",
    number: "01",
    title: "ICT consultancy",
    shortTitle: "Consultancy",
    image: consultancy,
    summary: "A clear technology plan grounded in your business reality.",
    detail: "We assess your environment, clarify the opportunity, and guide implementation so every technology decision has a useful purpose.",
    outcomes: ["Strategy planning", "Assessment and procurement", "Re-engineering solutions", "Disaster recovery"],
  },
  {
    id: "development",
    number: "02",
    title: "Software development",
    shortTitle: "Software development",
    image: development,
    summary: "Digital tools shaped around the way your teams work.",
    detail: "From a focused internal tool to a connected customer experience, we design and build software that removes friction and supports growth.",
    outcomes: ["Custom applications", "Workflow automation", "System integration", "Product improvement"],
  },
  {
    id: "infrastructure",
    number: "03",
    title: "Network infrastructure",
    shortTitle: "Infrastructure",
    image: cloud,
    summary: "Reliable foundations for connected, confident operations.",
    detail: "We help create secure, scalable infrastructure that keeps people, systems, and information working together wherever business happens.",
    outcomes: ["Infrastructure planning", "Cloud enablement", "Network design", "Security and continuity"],
  },
  {
    id: "hardware",
    number: "04",
    title: "Hardware sales and support",
    shortTitle: "Hardware support",
    image: hardware,
    summary: "The right equipment, supported throughout its lifecycle.",
    detail: "We source, configure, and support the hardware your organization needs, making procurement simpler and uptime more dependable.",
    outcomes: ["Technology procurement", "Device configuration", "Maintenance support", "Lifecycle planning"],
  },
  {
    id: "managed",
    number: "05",
    title: "IT support and managed services",
    shortTitle: "Managed services",
    image: support,
    summary: "Responsive support that keeps your team moving.",
    detail: "We provide practical day-to-day support and proactive care so technical issues do not become business interruptions.",
    outcomes: ["Help desk support", "Proactive monitoring", "Incident response", "Ongoing optimization"],
  },
];

const Services = () => {
  const [selectedId, setSelectedId] = useState(serviceData[0].id);
  const selectedService = serviceData.find((service) => service.id === selectedId);

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-copy">
          <p className="services-eyebrow">What we do</p>
          <h1>Technology with a job to do.</h1>
          <p>We combine strategy, systems, and support to help organizations work with more clarity and momentum.</p>
        </div>
        <div className="services-hero-orbit" aria-hidden="true"><span>V</span></div>
      </section>

      <section className="services-intro">
        <p className="services-section-label">01 / Our capabilities</p>
        <div>
          <h2>Choose the challenge.<br />We&apos;ll help shape the answer.</h2>
          <p>Explore the areas where our team can help your organization become more connected, efficient, and ready for what comes next.</p>
        </div>
      </section>

      <section className="service-explorer" aria-label="Services explorer">
        <div className="service-list">
          {serviceData.map((service) => (
            <button
              type="button"
              className={`service-card ${selectedId === service.id ? "selected" : ""}`}
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              aria-pressed={selectedId === service.id}
            >
              <span className="service-card-number">{service.number}</span>
              <span className="service-card-image"><img src={service.image} alt="" /></span>
              <span className="service-card-content"><strong>{service.shortTitle}</strong><small>{service.summary}</small></span>
              <FontAwesomeIcon className="service-card-arrow" icon={faArrowRight} />
            </button>
          ))}
        </div>

        {selectedService && (
          <article className="service-detail" key={selectedService.id}>
            <p className="services-section-label">Selected service / {selectedService.number}</p>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.detail}</p>
            <ul>
              {selectedService.outcomes.map((outcome) => <li key={outcome}><FontAwesomeIcon icon={faSquareCheck} />{outcome}</li>)}
            </ul>
            <a href="/contact" className="services-link">Talk to our team <span aria-hidden="true">&#8594;</span></a>
          </article>
        )}
      </section>

      <section className="services-endnote">
        <p className="services-section-label">02 / Start a project</p>
        <h2>Have a challenge in mind?</h2>
        <a href="/contact" className="services-link">Start a conversation <span aria-hidden="true">&#8594;</span></a>
      </section>
    </main>
  );
};

export default Services;
