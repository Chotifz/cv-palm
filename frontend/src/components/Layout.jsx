import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ scrollToAbout }) => (
  <div>
    <Navbar scrollToAbout={scrollToAbout} />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
