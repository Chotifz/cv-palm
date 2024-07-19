import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminLayout from "../layouts/adminLayout";

import Home from "../pages/home";
import ProductDetail from "../pages/ProductDetail";
import Admin from "../pages/admin";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "edit/:id",
        element: <EditProduct />,
      },
    ],
  },
]);
