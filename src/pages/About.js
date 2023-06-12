import React from "react";
import "./pages.css";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bren from "./../bren.jpg";
import ImageCarousel from "../components/ImageCarousel";
const About = () => {
  return (
    <>
      <div className="body">
        <div className="content">
          <div>
            <div className="about">
              <h1>About Us</h1>
            </div>

            <div className="image1"></div>
          </div>
          <br />
          <br />

          <div className="paragraph">
            <p>
              Vertex Hub Group Limited provides a one-stop automated solution
              for your trade and industry. Depending on the size and field of
              your organisation, we have different products and services to meet
              your needs. We also provide optimum and customized solutions,
              tailored for your organisation Vertex Hub Group <br />
              Limited is focused exclusively in the setup of high quality and
              cost effective ICT infrastructure development and implementation
              of services. Our advancement is based on the skill and experience
              of the individuals working in the organisation
            </p>
          </div>

          {/* <div className="portrait">
          <br />
          <h2>Our Mission</h2>
          <br />
          <p>
            Our Mission is to address our cutsomers' pain areas such
            <br />
            that the customers may focus on their core business.
          </p>
        </div> */}
          <div className="cont">
            <div className="background-image">
              <div className="green-box">
                <p className="text">
                  <h2>Our Mission</h2>
                  Our Mission is to address our cutsomers' pain areas such
                  <br />
                  that the customers may focus on their core business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Patners</h2>
        <div class="grid-container">
          <div class="grid-item">
            <img src={logo1} alt="Your Image" className="logos" />
          </div>
          <div class="grid-item">
            {" "}
            <img src={logo2} alt="Your Image" className="logos" />
          </div>
          <div class="grid-item">
            {" "}
            <img src={logo3} alt="Your Image" className="logos" />
          </div>
          <div class="grid-item">
            {" "}
            <img src={logo4} alt="Your Image" className="logos" />
          </div>
          <div class="grid-item">
            {" "}
            <img src={logo5} alt="Your Image" className="logos" />
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default About;
