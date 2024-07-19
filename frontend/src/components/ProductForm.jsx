import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCreateProduct, useEditProduct } from "../api/useProducts";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ product }) => {
  const [formData, setFormData] = React.useState({
    name: product?.name || "",
    price: product?.price || "",
    description: product?.description || "",
    image: product?.image || "",
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/");
    },
  });

  const updateMutation = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      updateMutation.mutate({ ...formData, id: product.id });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
