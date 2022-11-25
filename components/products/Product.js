/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";
import Button from "../common/Button";
import useRazorpay from "react-razorpay";
import { createOrder } from "../../utils/order/createOrder";
import { useSelector } from "react-redux";
import { optionsCreate } from "../../utils/razorpay/options";

function Product({ product }) {
  const user = useSelector((state) => state.user.data);
  const razorpayInstance = useRazorpay({
    authKey: {
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    },
  });

  const openRazorpay = async () => {
    createOrder({ amount: product.price + "00", productId: product.id }).then(
      (res) => {
        if (res.success) {
          const options = optionsCreate(res, user, product.user);
          const rzpay = new razorpayInstance(options);
          rzpay.open();
          rzpay.on("payment.failed", function (response) {
            console.log(response.error);
          });
        }
      }
    );
  };

  return (
    <div className="mx-0 md:w-[30%] lg:w-1/5 p-2 md:p-2 md:mx-0 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 h-fit">
      <div className="flex jusitfy-start items-center gap-2 text-md lg:text-lg capitalise">
        <img
          alt="display picture"
          src={
            product.user?.displaySrc == "" || !product.user?.displaySrc
              ? "/user.png"
              : product.user?.displaySrc
          }
          className="w-8 h-8 rounded-full object-cover border border-theme"
        />
        <div className="text-xs lg:text-sm capitalise">
          {product.user?.name ?? "Pharma Company"}
        </div>
      </div>
      <img
        alt="product"
        src={product.imgSrc}
        className="w-[100vw] h-64 object-cover md:max-h-64"
      />
      <div className="my-1 flex justify-between items-center">
        <div className="text-md lg:text-lg capitalise">
          {product.name ?? "Product Name"}
        </div>
        <div className="text-md lg:text-lg capitalise">
          ₹{product.price ?? "299"}
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button text="Buy" type="tertiary" onClick={() => openRazorpay()} />
      </div>
    </div>
  );
}

export default Product;
