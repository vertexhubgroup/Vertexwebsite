import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Careers.css";

const roles = [
  { id: "technology", title: "Technology that matters", copy: "Work on practical solutions that help real organizations operate with more clarity and confidence.", tag: "Purpose" },
  { id: "growth", title: "Room to grow", copy: "Build your craft alongside experienced people who value curiosity, ownership, and thoughtful work.", tag: "Development" },
  { id: "team", title: "A team that listens", copy: "Bring your perspective. The best ideas here are shaped through collaboration, not hierarchy.", tag: "Culture" },
];

const openings = [
  { title: "ICT Support Specialist", type: "Full-time", location: "Nairobi, Kenya" },
  { title: "Software Developer", type: "Full-time", location: "Nairobi, Kenya" },
  { title: "Technology Consultant", type: "Full-time", location: "Nairobi, Kenya" },
];

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0].id);
  const activeRole = roles.find((role) => role.id === selectedRole);

  return (
    <main className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-copy">
          <p className="careers-eyebrow">Careers at Vertexhub</p>
          <h1>Bring your best thinking to better work.</h1>
          <p>We are building a team of curious, capable people who want technology to create real value.</p>
          <a className="careers-link" href="#openings">See open roles <span aria-hidden="true">&#8595;</span></a>
        </div>
        <div className="careers-hero-mark" aria-hidden="true"><span>V</span></div>
      </section>

      <section className="careers-intro">
        <p className="careers-section-label">01 / Why Vertexhub</p>
        <div className="careers-intro-copy">
          <h2>Come for the challenge. Stay for the people.</h2>
          <p>We work across technology, infrastructure, analytics, and support. That range gives every person the chance to keep learning while doing work that has a visible impact.</p>
        </div>
      </section>

      <section className="careers-values">
        <div className="careers-value-tabs" role="tablist" aria-label="Reasons to join Vertexhub">
          {roles.map((role) => (
            <button type="button" role="tab" aria-selected={selectedRole === role.id} className={selectedRole === role.id ? "active" : ""} key={role.id} onClick={() => setSelectedRole(role.id)}>
              <span>{role.tag}</span><strong>{role.title}</strong><FontAwesomeIcon icon={faArrowRight} />
            </button>
          ))}
        </div>
        {activeRole && <div className="careers-value-detail" key={activeRole.id}><p className="careers-section-label">{activeRole.tag}</p><h3>{activeRole.title}</h3><p>{activeRole.copy}</p></div>}
      </section>

      <section className="careers-openings" id="openings">
        <div className="careers-openings-heading"><div><p className="careers-section-label">02 / Open roles</p><h2>Find your next role.</h2></div><p>Don&apos;t see the right fit? We&apos;re always interested in meeting thoughtful people. <a href="mailto:careers@vertexhubgroup.com">Introduce yourself.</a></p></div>
        <div className="opening-list">
          {openings.map((opening) => <a className="opening-item" href={`mailto:careers@vertexhubgroup.com?subject=Application: ${opening.title}`} key={opening.title}><span><strong>{opening.title}</strong><small>{opening.type} <i>·</i> <FontAwesomeIcon icon={faLocationDot} /> {opening.location}</small></span><FontAwesomeIcon icon={faArrowRight} /></a>)}
        </div>
      </section>

      <section className="careers-cta"><p className="careers-section-label">03 / Your next move</p><h2>Ready to make an impact?</h2><a className="careers-link" href="mailto:careers@vertexhubgroup.com">Send your application <span aria-hidden="true">&#8594;</span></a></section>
    </main>
  );
};

export default Careers;
