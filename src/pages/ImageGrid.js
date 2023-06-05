import React from "react";
import './ImageGrid.css'; // Import the CSS file for custom styles

const ImageGrid = () => {
  // Sample image URLs
  const imageUrls = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="image-grid">
      {imageUrls.map((url, index) => (
        <img key={index} className="grid-image" src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
