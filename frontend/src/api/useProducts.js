import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from ".";

export const useFetchProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/products");

      return dataResponse.data;
    },
  });
};

export const useFetchProductById = (id) => {
  return useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/products/${id}`);

      return dataResponse.data;
    },
  });
};

export const useCreateProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const dataResponse = await axiosInstance.post(`/products`, body);
      return dataResponse.data;
    },
    onSuccess,
  });
};

export const useDeleteProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.delete(`/products/${id}`);
      return dataResponse;
    },
    onSuccess,
  });
};

export const useEditProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.patch(`/products/${id}`);
      return dataResponse.data;
    },
    onSuccess,
  });
};
