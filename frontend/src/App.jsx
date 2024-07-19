import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetail";
import ProductNew from "./pages/ProductNew";
import ProductEdit from "./pages/ProductEdit";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="products/new" element={<ProductNew />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="products/:id/edit" element={<ProductEdit />} /> */}
      </Route>
    </Routes>
  </Router>
);

export default App;
