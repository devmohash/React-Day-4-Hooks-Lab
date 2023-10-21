import React from "react";
import "./ProductCard.css";
import ProductMapping from "./ProductMapping";
import useDataFetch from "../Hooks/useDataFetch";
import Loading from "./Loading";

const ProductCard = () => {
  const [products, spinner, error] = useDataFetch();

  return (
    <Loading spinner={spinner} error={error}>
      <ProductMapping products={products}></ProductMapping>
    </Loading>
  );
};

export default ProductCard;
