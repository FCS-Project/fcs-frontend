import React from "react";
import Product from "./Product";

function ProductFlex({ products }) {
  return (
    <div className="px-2 md:px-8 lg:px-8 flex flex-wrap justify-center md:justify-evenly gap-1">
      {/* {products?.map((item, i) => {
        return <Product />;
      })} */}
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductFlex;
