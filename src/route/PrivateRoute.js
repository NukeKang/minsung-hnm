import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ items, isAuthenticate }) => {
  return isAuthenticate === true ? (
    <ProductDetail items={items} />
  ) : (
    <Navigate to="/login/" />
  );
};

export default PrivateRoute;
