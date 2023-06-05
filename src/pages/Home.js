import React from "react";
import logo from "./../vertexlogo.png";

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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <p>
          we are a leading provider of analytics software,solutions and services
          that transform <br />
          the way organizations understand their customers and optimize business
          processes around them.
        </p>
        <img
          src={logo}
          alt="Your Image"
          className="image"
        />
        <strong>
          {" "}
          <span>"</span>
        </strong>{" "}
      </div>
      <div>
        
      </div>
    
    </>
  );
};

export default Home;
