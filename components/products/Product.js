/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../common/Button";

function Product({ id, name, price, owner }) {
  return (
    <div className="mx-0 md:w-[30%] lg:w-[20%] p-2 md:p-2 md:mx-0 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 h-fit">
      <div className="flex jusitfy-start items-center gap-2 text-md lg:text-lg capitalise">
        <img
          alt="display picture"
          src={
            owner?.displaySrc == "" || !owner?.displaySrc
              ? "/user.png"
              : owner?.displaySrc
          }
          className="w-8 h-8 rounded-full object-cover border border-theme"
        />
        <div className="text-xs lg:text-sm capitalise">
          {owner?.name ?? "Owner Name"}
        </div>
      </div>

      <img
        src="https://i.ibb.co/myvq6GR/aryan.jpg"
        className="w-full h-1/2 object-cover"
      />

      <div className="my-1 flex justify-between items-center">
        <div className="text-md lg:text-lg capitalise">
          {name ?? "Product Name"}
        </div>
        <div className="text-md lg:text-lg capitalise">${price ?? "299"}</div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button text="Buy" type="tertiary" onClick={() => alert("bought :)")} />
      </div>
    </div>
  );
}

export default Product;
