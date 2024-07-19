import React from "react";
import { Link } from "react-router-dom";
import { useFetchProduct } from "../../api/useProducts";
import ProductList from "../home/components/ProductList";

const Admin = () => {
  const { data, isLoading, isError } = useFetchProduct();
  const products = data?.data;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="mb-4">
        <Link to="add" className="btn btn-primary">
          Add Product
        </Link>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching products.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductList
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                isAdmin
              />
            ))
          ) : (
            <div>No Products available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
