import React from "react";
import Button from "./Button";

function Document({ name, createdAt, link }) {
  return (
    <div className="flex-col p-5 shadow-lg my-5 w-[100%] mx-[1rem] min-w-[20rem] md:w-[31%]">
      <img src="" className="w-[100%] h-[10rem] mb-3 object-fit" />
      <h1 className="text-xl">{name ?? "Document Name"}</h1>
      <h1 className="text-sm opacity-50">
        Created At: {createdAt ?? "22/10/2022"}
      </h1>
      <Button text="Open Doc" type="secondary" />
    </div>
  );
}

export default Document;
