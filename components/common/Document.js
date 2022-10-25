/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

function Document({ name, createdAt, link }) {
  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 w-full md:mx-3 lg:mx-4 min-w-80 md:w-1/3">
      <img
        alt="document"
        src="https://i.ibb.co/myvq6GR/aryan.jpg"
        className="w-full h-40 object-fit"
      />
      <div className="my-1">
        <div className="text-lg lg:text-xl">{name ?? "Document Name"}</div>
        <div className="text-xs sm:text-sm opacity-50">
          Created At: {createdAt ?? "22/10/2022"}
        </div>
      </div>
      <Button text="Open Doc" type="secondary" />
    </div>
  );
}

export default Document;
