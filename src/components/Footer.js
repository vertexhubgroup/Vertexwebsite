import React from "react";
import "./Footer.css"
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
            <Heading>Our Brands</Heading>
            <FooterLink href="#">vertexhub.shop</FooterLink>
            <FooterLink href="#">Vertex Pay</FooterLink>
          </Column>
          <Column>
            <Heading>Useful links</Heading>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contacts</FooterLink>
          </Column>
          <Column>
            <Heading>legal</Heading>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
           
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <div className="companyinfo" style={{color:"white" }}>
      <p>All rights reserved by Vertexhub Group. Copyright ©2023</p>

      </div>
    </Box>
  );
};
export default Footer;
