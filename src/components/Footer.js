import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./../Vertexhubblack .png";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  BrandBlock,
  Newsletter,
  SocialLinks,
  CompanyInfo,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <BrandBlock>
              <a className="footer-logo" href="/" aria-label="Vertexhub Group home">
                <img src={logo} alt="Vertexhub Group" />
              </a>
              <p className="brand-copy">
                Technology services and solutions that create sustainable value.
              </p>
            </BrandBlock>
            <Heading>Our brands</Heading>
            <FooterLink href="/">vertexhub.shop</FooterLink>
            <FooterLink href="/">Vertex Pay</FooterLink>
          </Column>
          <Column>
            <Heading>Useful links</Heading>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contacts</FooterLink>
          </Column>
          <Column>
            <Heading>legal</Heading>
            <FooterLink href="/Terms_of_service">Terms of Service</FooterLink>
            <FooterLink href="/Privacy_policy">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Newsletter>
              <Heading>Stay in the loop</Heading>
              <p>Get occasional news and ideas from Vertexhub Group.</p>
              <form onSubmit={(event) => event.preventDefault()}>
                <label className="sr-only" htmlFor="footer-email">Email address</label>
                <input id="footer-email" type="email" placeholder="Email address" required />
                <button type="submit">Subscribe <span aria-hidden="true">&#8594;</span></button>
              </form>
            </Newsletter>
            <Heading>Social media</Heading>
            <SocialLinks aria-label="Social media links">
              <a href="https://www.facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            </SocialLinks>
          </Column>
        </Row>
      </Container>
      <CompanyInfo><p>© {new Date().getFullYear()} Vertexhub Group. All rights reserved.</p></CompanyInfo>
    </Box>
  );
};
export default Footer;
