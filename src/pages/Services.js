import "./pages.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import consultancy from "./../consultancy.png";
const Services = ({ imageSrc, caption }) => {
  // const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   setClicked(!clicked);
};
return (
  <>
    <div className="content">
      <div>
        <div className="about">
          <h1> Our Services</h1>
        </div>

        <div className="image2"></div>

        <br />
        <br />

        <div className="paragraph">
          <h5>
            A constantly evolving portfolio to meet the ever-changing needs of
            our clients.
          </h5>
          <p>
            We focus on three ‘playing fields’ dedicated to the digitalization
            of key management areas at the core of businesses: Customer First,
            Intelligent Industry, and Enterprise Management.
          </p>
        </div>
        {/* <div className="image2">
          </div> */}
        <div className="secondsection">
          <h2>Explore our services</h2>
          {/* <Col
              sm={2}
              onClick={handleClick}
              className={clicked ? "clicked" : ""}
            >
              <img src={imageSrc} alt="Image" className="img-thumbnail" />
              <div className="caption">{caption}</div>
            </Col>
            <Container>
              <Row>
                <Services imageSrc={consultancy} caption="Caption 1" />
                <Services imageSrc={consultancy} caption="Caption 2" />
                <Services imageSrc={consultancy} caption="Caption 3" />
                <Services imageSrc={consultancy} caption="Caption 4" />
                <Services imageSrc={consultancy} caption="Caption 5" />
              </Row>
            </Container> */}
        </div>
      </div>
    </div>
  </>
);

export default Services;
