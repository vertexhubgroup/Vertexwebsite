import React from "react";
import ContactForm from "../components/ContactForm";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Contacts = () => {
  return (
    <>
      <div>
        <div className="content">
          <div>
            <div className="about">
              <h1>Contact Us</h1>
            </div>

            <div className="image1"></div>
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "40px",
            marginTop: "80px",
          }}
        >
          <div>
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
		  <div>
        <ContactForm />
      </div>
        {/* </div> */}
		
      </div>
     
    </>
  );
};

export default Contacts;
