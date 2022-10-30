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
    setName(changeEvent.target.files[0].name);
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
      <div className="my-2 mb-5 sm:my-5">
        <form method="post" onChange={(event) => handleFileChange(event)}>
          {file && <div className="text-sm mb-2">File Uploaded : {name}</div>}
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
