import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import consultancy from "./../consultancy.png";
import support from "./../support.jpg";
import cloud from "./../cloud-computing.png";
import services from "./../male-services-support-icon.png";
import dev from "./../software dev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Services = ({ imageSrc, caption }) => {
  const [toggle, setToggle] = useState(true);

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

          <div className="secondsection">
            <h2>Explore our services</h2>

            <div className="con">
              <a onClick={() => setToggle(!toggle)}>
                <div className="columnconsultancy">
                  <figure>
                    <img src={consultancy} alt="Consultancy" />
                    <figcaption>consultancy</figcaption>
                  </figure>
                </div>
              </a>
              <a href="">
                <div className="columndev">
                  <figure>
                    <img src={dev} alt="Software Development" />
                    <figcaption>software development</figcaption>
                  </figure>
                </div>
              </a>

              <a href="">
                <div className="columncloud">
                  <figure>
                    <img src={cloud} alt="Cloud Computing" />
                    <figcaption>Cloud computing</figcaption>
                  </figure>
                </div>
              </a>

              <a href="">
                <div className="columnservices">
                  <figure>
                    <img src={services} alt="Services" />
                    <figcaption>Services</figcaption>
                  </figure>
                </div>
              </a>

              <a href="">
                <div className="columnsupport">
                  <figure>
                    <img src={support} alt="Support" />
                    <figcaption>support</figcaption>
                  </figure>
                </div>
              </a>
            </div>

            {toggle && (
              <ul className="list-group">
                <h5>ICT Consultancy</h5>
                <p>
                  We consult for high-end technology implementation at clients’
                  site or implementation of new technology according to the
                  clients’ requirement or upgrading, enhancing the existing
                  facilities in the clients end with the new technology
                  integrated with the existing one.
                </p>
                <p>
                  VERTEX HUB offers a full range of consulting services to help
                  analyse your business requirements for effective
                  implementation __of solutions. Our consulting services cover:
                </p>
                <li className="list-group-item" >  <FontAwesomeIcon icon={faSquareCheck} className="fa-square-check"  bounce />Strategy Planning</li>
                <li className="list-group-item"> <FontAwesomeIcon icon={faSquareCheck} className="fa-square-check"  bounce /> Assessment</li>
                <li className="list-group-item"> <FontAwesomeIcon icon={faSquareCheck} className="fa-square-check"  bounce /> Procurement</li>
                <li className="list-group-item"><FontAwesomeIcon icon={faSquareCheck} className="fa-square-check"  bounce />  Re-engineering Solutions</li>
                <li className="list-group-item"> <FontAwesomeIcon icon={faSquareCheck} className="fa-square-check"  bounce />Disaster Recovery</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
