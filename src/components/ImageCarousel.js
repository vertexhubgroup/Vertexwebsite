import React from "react";
import dell from "./../dell_logo.jpg";
import './ImageCarousel.css'; // Import the CSS file for custom styles
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const ImageCarousel = () => {
  return (

    <Carousel interval={3000}>
      <Carousel.Item>
        <img className="carousel-image" src={dell} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={dell} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={dell} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
