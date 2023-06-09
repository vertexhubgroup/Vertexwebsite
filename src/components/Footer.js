import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "./../Vertexhubblack .png";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <a href="#" >
              <div
                className="logo"
                style={{ height: "100px", marginLeft: "-300px" }}
              >
                <img src={logo} alt="logo" />
              </div>
            </a>
            <Heading className="brands">Our Brands</Heading>
            <FooterLink href="#">vertexhub.shop</FooterLink>
            <FooterLink href="#">Vertex Pay</FooterLink>
          </Column>
          <Column>
            <Heading>Useful links</Heading>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            {/* <FooterLink href="#">Careers</FooterLink> */}
            <FooterLink href="/contact">Contacts</FooterLink>
          </Column>
          <Column>
            <Heading>legal</Heading>
            <FooterLink href="/Terms_of_service">Terms of Service</FooterLink>
            <FooterLink href="/Privacy_policy">Privacy Policy</FooterLink>
          </Column>
          <Column className="social-media" style={{ display: "block" }}>
            <section class="newsletter">
              <div class="container">
                <div class="row">
                  <div class="col-sm-">
                    <div class="content">
                      <p>Subscribe to our newsletter</p>
                      <div class="input-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                        />
                        <span class="input-group-btn">
                          <button class="btn" type="submit">
                            Subscribe Now
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Heading>Social Media</Heading>

            <FooterLink href="#">
              <FontAwesomeIcon icon="fa-brands fa-instagram" bounce />
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="fa-facebook"
                    bounce
                  />
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "20px" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-instagram"
                    bounce
                  />
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "20px" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-twitter"
                    bounce
                  />
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "20px" }}>
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} bounce />
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <div
        className="companyinfo"
        style={{ color: "black", paddingLeft: "30%" }}
      >
        <p>All rights reserved by Vertexhub Group. Copyright ©2023</p>
      </div>
    </Box>
  );
};
export default Footer;
