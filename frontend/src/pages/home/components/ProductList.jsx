import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDeleteProduct } from "../../../api/useProducts";

const ProductList = ({ id, name, description, image, isAdmin }) => {
  const location = useLocation();
  const { mutate: deleteProduct } = useDeleteProduct({
    onSuccess: () => window.location.reload(),
  });

  const handleDelete = () => {
    deleteProduct(id);
  };

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
          {isAdmin && (
            <>
              <Link
                to={`${location.pathname}/edit/${id}`}
                className="btn btn-secondary"
              >
                Edit
              </Link>
              <button onClick={handleDelete} className="btn btn-error">
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
