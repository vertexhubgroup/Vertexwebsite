import React from "react";
import "./pages.css";
import ImageCarousel from "../components/ImageCarousel"
const About = () => {
  return (
    <>
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
            Vertex Hub Group Limited provides a one-stop automated solution for
            your trade and industry. Depending on the size and field of your
            organisation, we have different products and services to meet your
            needs. We also provide optimum and customized solutions, tailored
            for your organisation Vertex Hub Group <br />
            Limited is focused exclusively in the setup of high quality and cost
            effective ICT infrastructure development and implementation of
            services. Our advancement is based on the skill and experience of
            the individuals working in the organisation
          </p>
        </div>

        <div className="portrait">
          <br />
          <h2>Our Mission</h2>
          <br />
          <p>
            Our Mission is to address our cutsomers' pain areas such
            <br />
            that the customers may focus on their core business.
          </p>
        </div>
        {/* <div className="content"></div> */}
      </div>
      <div>
      <ImageCarousel/>

      </div>
    </>
  );
};

export default About;
