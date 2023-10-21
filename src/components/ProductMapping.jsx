import React from "react";
import NewCard from "./NewCard";

const ProductMapping = ({ products }) => {
  const cards =
    products.length > 0 ? (
      products.map((product) => {
        return <NewCard product={product} key={product.id}></NewCard>;
      })
    ) : (
      <p>Data Not Found</p>
    );

  return <div className="row">{cards}</div>;
};

export default ProductMapping;
