import React from "react";
import logo from "./../vertexlogo.png";
import boxed from "./../boxed.jpg";
import bren from "./../bren.jpg"
import ImageGrid from "../components/ImageGrid";
const Home = () => {
  return (
    <>
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
      <div class="containerhover">
  <img src={bren} alt="bren" class="imagenew"/>
  <div class="overlay">
    <div class="text">Check this out</div>
  </div>
</div>
     <div>
        <ImageGrid/>
        </div> 
    </>
  );
};

export default Home;
