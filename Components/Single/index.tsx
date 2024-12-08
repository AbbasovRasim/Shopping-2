import React from "react";

export const Single = ({ id, name, url, price }) => {
  return (
    <div className="container">
      <h1 className="text-xl font-bold">{name}</h1>
      <img className="mx-auto" src={url} alt={name} />
      <p className="text-lg font-semibold">{price}</p>
      <p className="text-sm">ID: {id}</p>
    </div>
  );
};
