import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send message");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message received");
    e.target.reset();
  };

  return (
    <div className="contact-form-card">
      <div className="form-heading">
        <p className="contact-eyebrow">Tell us about your project</p>
        <h2>Let&apos;s make something useful.</h2>
        <p>Share a little about what you are working on and our team will get back to you.</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="field-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" autoComplete="name" placeholder="Jane Doe" required />
          </div>
          <div className="field-group">
            <label htmlFor="email">Work email</label>
            <input type="email" id="email" name="email" autoComplete="email" placeholder="jane@company.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field-group">
            <label htmlFor="company">Company <span>(optional)</span></label>
            <input type="text" id="company" name="company" autoComplete="organization" placeholder="Your organization" />
          </div>
          <div className="field-group">
            <label htmlFor="service">What can we help with?</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Analytics and insights</option>
              <option>Technology solutions</option>
              <option>Business process improvement</option>
              <option>Something else</option>
            </select>
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell us about your goals, timeline, or challenge." required />
        </div>
        <div className="form-submit">
          <button type="submit">
          {formStatus}
            <span aria-hidden="true">&#8594;</span>
          </button>
          <small>We usually respond within one business day.</small>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;