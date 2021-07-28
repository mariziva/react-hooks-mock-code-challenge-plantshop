import React, { useState } from "react";

function PlantCard({ plant: { id, name, image, price } }) {
  const [inStock, setInStock] = useState(true)

  function toggleInStock() {
    setInStock((inStock) => !inStock)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
        <button className="primary" onClick={toggleInStock}>{inStock ? "In Stock" : "Sold Out"}</button>
    </li>
  );
}

export default PlantCard;
