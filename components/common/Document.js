/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useRouter } from "next/router";
import { deleteDocument } from "../../utils/document/deleteDocument";

function Document({ id, name, createdAt, link, deleteDoc }) {
  const created = new Date(createdAt);
  const router = useRouter();

  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch(link).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = name;
        alink.click();
      });
    });
  };

  return (
    <div className="p-2 md:p-3 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 w-full md:mx-3 lg:mx-4 min-w-80 md:w-1/2 lg:w-1/3">
      <iframe
        src={link}
        className="w-full h-full overflow-hidden pointer-events-none min-h-[3rem]"
      />
      <div className="my-1">
        <div className="text-md lg:text-lg">{name ?? "Document Name"}</div>
        <div className="text-xs sm:text-sm opacity-50">
          Uploaded on:{" "}
          {created.getDate() +
            "/" +
            (created.getMonth() + 1) +
            "/" +
            created.getFullYear() ?? "22/10/2022"}
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button text="Download" type="tertiary" onClick={() => downloadPDF()} />

        <div
          className="w-12"
          onClick={() => {
            deleteDocument(id).then((response) => {
              if (response.success) {
                router.push("/profile");
              }
            });
          }}
        >
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
