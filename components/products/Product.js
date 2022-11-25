/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";
import Button from "../common/Button";
import useRazorpay from "react-razorpay";

function Product({ product }) {
  console.log("PRODUCT", product);
  const razorpayInstance = useRazorpay({
    authKey: {
      key_id: "rzp_test_ZiVolzO6sax6X4",
      key_secret: "NWiFcQYN3sqtdcawncbg5Vaz",
    },
  });

  const openRazorpay = async () => {
    const order = await razorpayInstance.orders.create({
      amount: 111,
      currency: "INR",
    });

    const options = {
      key: "rzp_test_ZiVolzO6sax6X4",
      amount: 100,
      currency: "INR",
      name: "VAMA CARE",
      description: "Proceed to buy this product",
      image: "https://i.ibb.co/Ct1jrgj/Logo2.png",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
        //  Call dispatch
      },
      prefill: {
        name: "Avi",
        email: "email",
        contact: "phone",
      },
      notes: {
        address: "VAMA CARE OFFICE",
      },
      theme: {
        color: "var(--black)",
      },
      callback_url: "",
    };

    const rzpay = new razorpayInstance(options);
    rzpay.open();

    rzpay.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });

    rzpay.on("payment.success", (res) => {
      console.log("WOHOOOO", res);
    });
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
          ${product.price ?? "299"}
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button text="Buy" type="tertiary" onClick={() => alert("bought")} />
      </div>
    </div>
  );
}

export default Product;
