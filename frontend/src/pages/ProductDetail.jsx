import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProductById } from "../api/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchProductById(id);
  const product = data?.data;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-semibold">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
