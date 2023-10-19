import React, { useState } from "react";
import consultancy from "./../consultancy-removebg-preview.png";
import support from "./../support.jpg";
import cloud from "./../cloud-computing-removebg-preview.png";
import services from "./../male-services-support-icon.png";
import dev from "./../software_dev-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleColumnClick = (column) => {
    setSelectedColumn(column);
  };

  return (
    <>
      <div className="body">
        <div className="content">
          <div className="about">
            <h1>Our Services</h1>
          </div>
          <div className="image2"></div>

          <br />
          <br />
          <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
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
            <br />
            <br />
            <br />
            <br />
            <h2 style={{alignItems:"center" }}>Explore our services</h2>
            <br />
            <br />
            <br />
            <br />

            <div className="con">
              <div
                onClick={() => handleColumnClick("consultancy")}
                className={`column ${
                  selectedColumn === "consultancy" ? "active" : ""
                }`}
              >
                <figure>
                  <img src={consultancy} alt="Consultancy" />
                  <figcaption>Consultancy</figcaption>
                </figure>
              </div>

              <div
                onClick={() => handleColumnClick("dev")}
                className={`column ${selectedColumn === "dev" ? "active" : ""}`}
              >
                <figure>
                  <img src={dev} alt="Software Development" />
                  <figcaption>Software Development</figcaption>
                </figure>
              </div>

              <div
                onClick={() => handleColumnClick("cloud")}
                className={`column ${
                  selectedColumn === "cloud" ? "active" : ""
                }`}
              >
                <figure>
                  <img src={cloud} alt="Cloud Computing" />
                  <figcaption>Network Infrastructure & Services</figcaption>
                </figure>
              </div>

              <div
                onClick={() => handleColumnClick("services")}
                className={`column ${
                  selectedColumn === "services" ? "active" : ""
                }`}
              >
                <figure>
                  <img src={services} alt="Services" />
                  <figcaption>Hardware sales & support</figcaption>
                </figure>
              </div>

              <div
                onClick={() => handleColumnClick("support")}
                className={`column ${
                  selectedColumn === "support" ? "active" : ""
                }`}
              >
                <figure>
                  <img src={support} alt="Support" />
                  <figcaption>IT support & Managed Services</figcaption>
                </figure>
              </div>
            </div>

            <div className="column-content">
              {selectedColumn && (
                <ul className="list-group">
                  {selectedColumn === "consultancy" && (
                    <>
                      <h5>ICT Consultancy</h5>
                      <p>
                        We consult for high-end technology implementation at
                        clients’ site or implementation of new technology
                        according to the clients’ requirement or upgrading,
                        enhancing the existing facilities in the clients end
                        with the new technology integrated with the existing
                        one.
                      </p>
                      <p>
                        VERTEX HUB offers a full range of consulting services to
                        help analyse your business requirements for effective
                        implementation of solutions. Our consulting services
                        cover:
                      </p>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className="fa-square-check"
                          bounce
                        />
                        Strategy Planning
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className="fa-square-check"
                          bounce
                        />
                        Assessment
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className="fa-square-check"
                          bounce
                        />
                        Procurement
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className="fa-square-check"
                          bounce
                        />
                        Re-engineering Solutions
                      </li>
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className="fa-square-check"
                          bounce
                        />
                        Disaster Recovery
                      </li>
                    </>
                  )}

                  {selectedColumn === "dev" && (
                    <>
                      <h5> Software Development</h5>
                      <p>
                        We consult for high-end technology implementation at
                        clients’ site or implementation of new technology
                        according to the clients’ requirement or upgrading,
                        enhancing the existing facilities in the clients end
                        with the new technology integrated with the existing
                        one.
                      </p>
                    </>
                  )}

                  {selectedColumn === "cloud" && (
                    <>
                      <h5>Network Infrastructure & Services</h5>
                      <p>
                        We consult for high-end technology implementation at
                        clients’ site or implementation of new technology
                        according to the clients’ requirement or upgrading,
                        enhancing the existing facilities in the clients end
                        with the new technology integrated with the existing
                        one.
                      </p>
                    </>
                  )}

                  {selectedColumn === "services" && (
                    <>
                      <h5>Hardware sales & support</h5>
                      <p>
                        We consult for high-end technology implementation at
                        clients’ site or implementation of new technology
                        according to the clients’ requirement or upgrading,
                        enhancing the existing facilities in the clients end
                        with the new technology integrated with the existing
                        one.
                      </p>
                    </>
                  )}

                  {selectedColumn === "support" && (
                    <>
                      <h5>IT support & Managed Services</h5>
                      <p>
                        We consult for high-end technology implementation at
                        clients’ site or implementation of new technology
                        according to the clients’ requirement or upgrading,
                        enhancing the existing facilities in the clients end
                        with the new technology integrated with the existing
                        one.
                      </p>
                    </>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
