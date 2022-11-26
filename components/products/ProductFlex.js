import React from "react";
import Product from "./Product";

function ProductFlex({ products }) {
  return (
    <div className="px-2 md:px-8 lg:px-8 flex flex-wrap justify-center md:justify-evenly gap-1">
      {products.length > 0 ? (
        products?.map((item, i) => {
          return <Product key={i} product={item} />;
        })
      ) : (
        <p>No Products are uploaded on the platform currently</p>
      )}
    </div>
  );
}

export default ProductFlex;
