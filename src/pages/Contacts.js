import React from "react";
import ContactForm from "../components/ContactForm";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contacts = () => {
  return (
    <>
    <div className="body">
      <div>
        <div className="content">
          <div>
            <div className="about">
              <h1>Contact Us</h1>
            </div>

            <div className="contactsimage"></div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "40px",
            marginTop: "80px",
          }}
        ></div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127643.12134436078!2d36.68819498664008!3d-1.263950055908912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19bfb72c810b%3A0x5b6e2de3ea7ed488!2sVertex%20Hub%20Group%2C%20Limited!5e0!3m2!1sen!2ske!4v1685942591734!5m2!1sen!2ske"
          width={1185}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <div>
            <h3>Contact Information</h3>
            <p>
              We Are Here for You. <br /> How Can We Help You?
            </p>
          </div>
          <div>
            <h5>Name:</h5>
            <p>Riverside Park, Waiyaki Way,Nairobi</p>
          </div>
          <div>
            <h5>Contact:</h5>
            <p>+254 700 354 050</p>
          </div>
          <div>
            <h5>Email:</h5>
            <p>info@vertexhubgroup.com</p>
          </div> */}
      <div class="containerfoot">
        <div class="column2">
          <div>
            <h3>Contact Information</h3>
            <p style={{alignItems:"center"}}>
              We Are Here for You.  How Can We Help You?
            </p>
          </div>
          <div>
            <h5>
              Location: <FontAwesomeIcon icon={faLocation} bounce />
            </h5>
            <p>Riverside Park, Waiyaki Way, Nairobi</p>
          </div>
          <div>
            <h5>
              Contact: <FontAwesomeIcon icon={faPhone} bounce />
            </h5>
            <p>+254 700 354 050</p>
          </div>
          <div>
            <h5>
              Email: <FontAwesomeIcon icon={faEnvelope} bounce />
            </h5>
            <p>info@vertexhubgroup.com</p>
          </div>
        </div>
      </div>
      <br/>
      </div>
    </>
  );
};

export default Contacts;
