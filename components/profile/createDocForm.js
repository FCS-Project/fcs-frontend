/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import uploadImage from "../../utils/imageUpload";
import Button from "../common/Button";
import Input from "../common/Input";

function CreateDocForm({ file, setFile }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleFileChange = async (changeEvent) => {
    console.log("hello");
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setFile(onLoadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
    // await uploadImage(changeEvent, setFileBannerSrc, "file");
  };

  useEffect(() => {
    if (file) {
      console.log("fileSet", file);
    }
  }, [file]);

  return (
    <div className="flex flex-col w-full mt-5">
      <Input
        heading="Document Name"
        placeholder="Document Name"
        state={name}
        setState={setName}
      />
      <Input
        heading="Document Type"
        placeholder="Document Type"
        state={type}
        setState={setType}
      />
      <div className="my-2 sm:my-5">
        <form method="post" onChange={(event) => handleFileChange(event)}>
          <label htmlFor="file">
            <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
              Upload File
            </div>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            style={{ display: "none" }}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateDocForm;
