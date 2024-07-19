import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useFetchProductById } from "../api/useProducts";
import ProductForm from "../components/ProductForm";

const ProductEdit = () => {
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
      <h1>Edit Product</h1>
      <ProductForm product={product} />
    </div>
  );
};

export default ProductEdit;
