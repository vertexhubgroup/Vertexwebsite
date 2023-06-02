import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'; // Assuming the CSS file is named "Carousel.css"


import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Assuming the CSS file is named "Carousel.css"

const Carousel = () => {
  const [images, setImages] = useState([
    './../dell_logo.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    // Initial set of images
  ]);
  

  useEffect(() => {
    const timer = setInterval(() => {
      // Add a new image to the array
      const newImage = `path/to/image${images.length + 1}.jpg`;
      setImages(prevImages => [...prevImages, newImage]);

      // Remove the first image from the array
      setImages(prevImages => prevImages.slice(1));
    }, 3000); // Change the time interval as needed

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

