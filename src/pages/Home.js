import React from "react";
import logo from "./../vertexlogo.png";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";
import boxed from "./../boxed.jpg";
import bren from "./../bren.jpg";
import ImageGrid from "../components/ImageGrid";
import ImageCarousel from "../components/ImageCarousel";
const Home = () => {
  return (
    <>
      <title>Vertexhb group</title>
      <div>
        <div className="content">
          <div>
            <div className="abouthome">
              <p>
                We aim to deliver sustainable value by providing high quality
                technology services and solutions.
              </p>
            </div>

            <div className="blue"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="middlecontent">
        <br />

        <h1>Why Vertexhubgroup?</h1>
        <h5>
          we are a leading provider of analytics software,solutions and services
          that transform the way organizations understand their customers and
          optimize business processes around them.
        </h5>
      </div>

      <div className="quotes">
        <strong>
          {" "}
          <span>"</span>
        </strong>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          we are a leading provider of analytics software,solutions and services
          that transform <br />
          the way organizations understand their customers and optimize business
          processes around them.
        </p>
        <img src={logo} alt="Your Image" className="image" />
        <strong>
          {" "}
          <span>"</span>
        </strong>{" "}
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
    </>
  );
};

export default Home;
