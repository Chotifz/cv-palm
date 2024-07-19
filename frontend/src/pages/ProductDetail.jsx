import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useFetchProductById } from "../api/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery(["product", id], () => fetchProductById(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
