import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ id, name, description, image }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
