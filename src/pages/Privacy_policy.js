import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

const PrivacyPolicy = () => (
  <main className="legal-page">
    <section className="legal-hero">
      <div>
        <p className="legal-eyebrow">Vertexhub Group</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">How we collect, use, protect, and respect information shared with Vertexhub Group.</p>
      </div>
      <div className="legal-hero-mark" aria-hidden="true">V</div>
    </section>

    <div className="legal-layout">
      <aside className="legal-summary">
        <p className="legal-section-label">On this page</p>
        <nav aria-label="Privacy policy sections">
          <a href="#information">Information we collect</a>
          <a href="#use">How we use it</a>
          <a href="#sharing">Sharing and security</a>
          <a href="#choices">Your choices</a>
        </nav>
        <p className="legal-meta"><strong>Last updated</strong><br />19 August 2026</p>
      </aside>

      <article className="legal-content">
        <p className="legal-intro">We use information from our interactions with clients, prospects, and website visitors to provide useful services and improve how Vertexhub Group works. This policy explains our approach in plain language.</p>
        <section id="information"><h2>1. Information we collect</h2><p>We may collect information you provide when you contact us, request a service, or subscribe to updates, such as your name, email address, phone number, company, and the details of your enquiry. We may also receive technical information such as browser, device, and website usage information when you visit our website.</p></section>
        <section id="use"><h2>2. How we use information</h2><p>We use information to respond to enquiries, prepare and deliver services, manage client relationships, improve our website and offerings, communicate important updates, and protect our systems. We only use information for legitimate business purposes and in ways consistent with the context in which it was shared.</p></section>
        <section><h2>3. Cookies and similar technologies</h2><p>Our website may use basic cookies or similar technologies to support functionality, understand general usage, and improve the experience. You can manage cookies through your browser settings, although some website features may work differently when cookies are disabled.</p></section>
        <section id="sharing"><h2>4. Sharing and security</h2><p>We do not sell personal information. We may share information with trusted service providers who help us operate our business, where needed to deliver an agreed service, or where required by law. We use reasonable technical and organizational safeguards, but no online system can be guaranteed completely secure.</p></section>
        <section><h2>5. Retention</h2><p>We retain information only for as long as reasonably necessary for the purpose it was collected, to provide services, meet legal or accounting obligations, resolve disputes, and enforce agreements.</p></section>
        <section id="choices"><h2>6. Your choices and rights</h2><p>Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you. You may also ask us to stop sending optional communications. To make a request, contact us using the details below. We may need to verify your identity before completing a request.</p></section>
        <section><h2>7. Updates to this policy</h2><p>As our website, services, and technology develop, we may update this policy. We will publish the current version on this page and update the revision date above.</p></section>
        <section><h2>8. Contact us</h2><p>For privacy questions or requests, email <a href="mailto:info@vertexhubgroup.com">info@vertexhubgroup.com</a> or write to Vertexhub Group, Riverside Park, Waiyaki Way, Nairobi, Kenya.</p></section>
        <div className="legal-cta"><strong>Have a privacy question?</strong><Link to="/contact">Contact Vertexhub Group <span aria-hidden="true">&#8594;</span></Link></div>
      </article>
    </div>
  </main>
);

export default PrivacyPolicy;
