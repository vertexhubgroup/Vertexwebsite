import React from "react";
import './ImageGrid.css'; // Import the CSS file for custom styles
import dell from "./../dell_logo.jpg"
const ImageGrid = () => {
  // Sample image URLs
  const imageUrls = [
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />,
    <img className="grid-image" src={dell} alt="Grid image" />
  
  ];
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the image URLs into rows of 5 images each
  const imageRows = chunkArray(imageUrls, 5);

  return (
    <div className="image-grid">
      {imageRows.map((row, rowIndex) => (
        <div key={rowIndex} className="image-row">
          {row.map((url, index) => (
            <img key={index} className="grid-image" src={url} alt={`Image ${index + 1}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;