import React from "react";
import "./pages.css";
import logo1 from "./../logo1.png";
import logo2 from "./../logo2.png";
import logo3 from "./../logo3.png";
import logo4 from "./../logo4.png";
import logo5 from "./../logo5.png";
import bren from "./../bren.jpg"
import ImageCarousel from "../components/ImageCarousel";
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

        {/* <div className="portrait">
          <br />
          <h2>Our Mission</h2>
          <br />
          <p>
            Our Mission is to address our cutsomers' pain areas such
            <br />
            that the customers may focus on their core business.
          </p>
        </div> */}
        <div className="cont">
          <div className="background-image">
            <div className="green-box">
              <p className="text">
                <h2>Our Mission</h2>
                Our Mission is to address our cutsomers' pain areas such
                <br />
                that the customers may focus on their core business.
                <nav aria-label="Page navigation example" className="pagen">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel">
  <div class="slide active">
    <img src={bren} alt="Slide 1" />
    <div class="slide-content">
      <h2>Slide 1</h2>
      <p>Text for Slide 1</p>
    </div>
  </div>
  <div class="slide">
    <img src={bren} alt="Slide 2" />
    <div class="slide-content">
      <h2>Slide 2</h2>
      <p>Text for Slide 2</p>
    </div>
  </div>
  <div class="slide">
    <img src={bren} alt="Slide 3" />
    <div class="slide-content">
      <h2>Slide 3</h2>
      <p>Text for Slide 3</p>
    </div>
  </div>
</div>

<div class="pagination"></div>

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

export default About;
