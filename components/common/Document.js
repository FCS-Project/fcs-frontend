/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

function Document({ name, createdAt, link }) {
  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 w-full md:mx-3 lg:mx-4 min-w-80 md:w-[30%]">
      <img
        alt="document"
        src="https://i.ibb.co/myvq6GR/aryan.jpg"
        className="w-full h-40 object-cover"
      />
      <div className="my-1">
        <div className="text-lg lg:text-xl">{name ?? "Document Name"}</div>
        <div className="text-xs sm:text-sm opacity-50">
          Uploaded on: {createdAt ?? "22/10/2022"}
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button text="Open Doc" type="tertiary" />
        <div className="w-[3rem]">
          <Button
            icon={<DeleteSharpIcon sx={{ fontSize: "1.2rem" }} />}
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default Document;
