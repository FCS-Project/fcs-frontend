/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import uploadImage from "../utils/image/imageUpload";
import { createProduct } from "../utils/product/createProduct";

function CreateProductPage() {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productDP, setProductDP] = useState("");
  const [productDPSrc, setProductDPSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (changeEvent) => {
    setLoading(true);
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setProductDP(onLoadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
    await uploadImage(changeEvent, setProductDPSrc, "file");
    setLoading(false);
  };

  const submit = async () => {
    const dto = {
      name: productName,
      imgSrc: productDPSrc,
      price: price,
      userId: user?.id,
    };
    createProduct(dto).then((response) => {
      if (response.success) {
        alert("Product Created!");
      } else {
        setError(response.error);
      }
    });
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div
          className={`flex flex-col p-10 w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 shadow-lg mt-10`}
        >
          <div
            className={`text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl`}
          >
            Create A Product
          </div>
          {error && (
            <div className="text-theme text-center">Error: {error}</div>
          )}
          <Input
            heading={"Product Name"}
            placeholder={"Name"}
            state={productName}
            setState={setProductName}
            required={true}
            style="my-0.5"
          />
          <Input
            heading={"Product Price In INR"}
            placeholder={"Price"}
            state={price}
            setState={setPrice}
            required={true}
            style="my-0.5"
          />
          <div className="my-1">
            <div className="text-sm sm:text-base lg:text-lg">
              Upload Product Picture
            </div>
            <div className="flex w-full items-start justify-between mt-2 gap-2 lg:gap-5">
              <form
                method="post"
                onChange={(event) => {
                  handleFileChange(event);
                }}
                className="w-full"
              >
                <label htmlFor="file">
                  <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                    Click To Upload
                  </div>
                </label>

                {productDPSrc && (
                  <>
                    <p className="text-sm mt-5">Image Uploaded</p>
                    <img
                      alt="display picture"
                      src={productDP}
                      className="w-1/2 max-h-[10rem] object-contain max-w-1/2 block ml-auto mr-auto border-theme my-5"
                    />
                  </>
                )}
                {loading && <p className="text-sm mt-5">Image Loading...</p>}
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".png,.jpg,.jpeg,.webp"
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
          <div className="mt-2" />
          <Button
            type={"primary"}
            text={"Create Product"}
            style={"mb-4"}
            onClick={() => {
              submit();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CreateProductPage;
