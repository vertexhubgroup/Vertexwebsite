import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

const TermsOfService = () => (
  <main className="legal-page">
    <section className="legal-hero">
      <div>
        <p className="legal-eyebrow">Vertexhub Group</p>
        <h1>Terms of Service</h1>
        <p className="legal-lead">The terms that guide the use of our website, services, and working relationship with you.</p>
      </div>
      <div className="legal-hero-mark" aria-hidden="true">V</div>
    </section>

    <div className="legal-layout">
      <aside className="legal-summary">
        <p className="legal-section-label">On this page</p>
        <nav aria-label="Terms sections">
          <a href="#agreement">Agreement</a>
          <a href="#services">Our services</a>
          <a href="#responsibilities">Responsibilities</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="legal-meta"><strong>Last updated</strong><br />19 August 2026</p>
      </aside>

      <article className="legal-content">
        <p className="legal-intro">These Terms of Service explain the basis on which Vertexhub Group Limited provides information, products, and technology services through this website and through an agreed client engagement.</p>
        <section id="agreement"><h2>1. Agreement to these terms</h2><p>By using this website or engaging Vertexhub Group, you agree to these Terms of Service. If you are using our services on behalf of an organization, you confirm that you have authority to accept these terms for that organization.</p></section>
        <section id="services"><h2>2. Our services</h2><p>Our services may include ICT consultancy, software development, network infrastructure, hardware supply and support, and managed IT services. The exact scope, deliverables, timelines, fees, and responsibilities for a client engagement will be set out in a separate written proposal, statement of work, or service agreement.</p></section>
        <section id="responsibilities"><h2>3. Your responsibilities</h2><p>You agree to provide accurate information, timely access, decisions, approvals, and materials reasonably needed for us to deliver an engagement. You are responsible for ensuring that information or content you provide to us can be used for the agreed purpose.</p></section>
        <section><h2>4. Intellectual property</h2><p>Each party retains ownership of materials, software, methods, and information it owned before an engagement. Unless a written agreement says otherwise, Vertexhub Group retains ownership of its pre-existing tools, methods, and know-how. Rights in project-specific deliverables will follow the applicable client agreement.</p></section>
        <section><h2>5. Acceptable use</h2><p>You must not misuse this website, attempt unauthorized access, interfere with its operation, or use it to violate any applicable law or the rights of another person. We may restrict access where reasonably necessary to protect the website, our users, or our services.</p></section>
        <section><h2>6. Information and availability</h2><p>We work to keep the information on this website accurate and available, but content is provided for general information and may change without notice. A website description does not create a promise that a particular service, feature, or result will be available unless confirmed in a written agreement.</p></section>
        <section><h2>7. Limitation and changes</h2><p>To the extent permitted by applicable law, each party&apos;s liability and any service-specific warranties will be governed by the applicable written engagement agreement. We may update these terms from time to time. The updated version will be posted on this page with a new revision date.</p></section>
        <section id="contact"><h2>8. Contact us</h2><p>Questions about these terms or our services can be sent to <a href="mailto:info@vertexhubgroup.com">info@vertexhubgroup.com</a>. We are based at Riverside Park, Waiyaki Way, Nairobi, Kenya.</p></section>
        <div className="legal-cta"><strong>Need help understanding a service?</strong><Link to="/contact">Talk to our team <span aria-hidden="true">&#8594;</span></Link></div>
      </article>
    </div>
  </main>
);

export default TermsOfService;
