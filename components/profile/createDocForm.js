/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function CreateDocForm({ file, setFile, name, setName }) {
  const handleFileChange = async (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setFile(onLoadEvent.target.result);
    };
    setName(changeEvent.target.files[0].name);
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  return (
    <div className="flex flex-col w-full">
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
