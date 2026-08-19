import React from "react";
import ContactForm from "../components/ContactForm";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contacts.css";

const Contacts = () => (
  <main className="contact-page">
    <section className="contact-hero">
      <div className="contact-hero-inner">
        <p className="contact-eyebrow">Let&apos;s work together</p>
        <h1>Good work starts with a good conversation.</h1>
        <p>Whether you have a clear brief or a problem still taking shape, we&apos;d like to hear from you.</p>
      </div>
    </section>

    <section className="contact-intro">
      <div className="contact-section-label">01 / Start here</div>
      <div className="contact-intro-copy">
        <h2>Tell us what you&apos;re trying to change.</h2>
        <p>We&apos;ll connect you with the right people, ask the useful questions, and help shape a practical next step.</p>
      </div>
    </section>

    <section className="contact-workspace">
      <aside className="contact-details">
        <p className="contact-section-label">02 / Find us</p>
        <h2>We&apos;re here to help.</h2>
        <p className="contact-details-copy">Reach out directly or send us a note using the form. Our team is based in Nairobi and works with organizations wherever they are.</p>
        <div className="contact-detail-list">
          <a href="mailto:info@vertexhubgroup.com"><FontAwesomeIcon icon={faEnvelope} /><span><small>Email</small>info@vertexhubgroup.com</span></a>
          <a href="tel:+254700354050"><FontAwesomeIcon icon={faPhone} /><span><small>Call us</small>+254 700 354 050</span></a>
          <div><FontAwesomeIcon icon={faLocation} /><span><small>Visit</small>Riverside Park, Waiyaki Way<br />Nairobi, Kenya</span></div>
        </div>
        <p className="response-note"><strong>Response time</strong><br />We usually reply within one business day.</p>
      </aside>
      <ContactForm />
    </section>

    <section className="contact-map-section">
      <div className="contact-map-heading">
        <p className="contact-section-label">03 / Our location</p>
        <h2>Come say hello.</h2>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127643.12134436078!2d36.68819498664008!3d-1.263950055908912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19bfb72c810b%3A0x5b6e2de3ea7ed488!2sVertex%20Hub%20Group%2C%20Limited!5e0!3m2!1sen!2ske!4v1685942591734!5m2!1sen!2ske"
          title="Vertexhub Group location in Nairobi"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </main>
);

export default Contacts;
