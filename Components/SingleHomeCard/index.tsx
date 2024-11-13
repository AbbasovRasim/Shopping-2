import React from "react";

export const SingleHomeCard = ({ id, images }) => {
  return (
    <div className="container">
      <h2>Product ID: {id}</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            className="mx-auto"
            src={image.url}
            alt={image.name}
          />
        ))}
      </div>
    </div>
  );
};
