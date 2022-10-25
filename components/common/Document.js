/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

function Document({ name, createdAt, link }) {
  return (
    <div className="flex-col p-5 shadow-lg my-5 w-full mx-[1rem] min-w-80 md:w-1/3">
      <img alt="document" src="" className="w-full h-40 mb-3 object-fit" />
      <h1 className="text-xl">{name ?? "Document Name"}</h1>
      <h1 className="text-xs sm:text-sm opacity-50">
        Created At: {createdAt ?? "22/10/2022"}
      </h1>
      <Button text="Open Doc" type="secondary" />
    </div>
  );
}

export default Document;
