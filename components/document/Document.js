/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../common/Button";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useRouter } from "next/router";
import { deleteDocument } from "../../utils/document/deleteDocument";

function Document({ id, name, createdAt, link, user, shared }) {
  const router = useRouter();
  const created = new Date(createdAt);
  const formattedDate =
    created.getDate() +
    "/" +
    (created.getMonth() + 1) +
    "/" +
    created.getFullYear();

  const downloadPDF = () => {
    fetch(link).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = name;
        alink.click();
      });
    });
  };

  return (
    <div className="mx-4 w-full md:w-[45%] lg:w-[30%] p-2 md:p-2 lg:p-4 flex flex-col gap-2 lg:py-3 shadow-lg my-5 ">
      {shared && (
        <div className="flex jusitfy-start items-center gap-2 text-md lg:text-lg capitalise">
          <img
            alt="display picture"
            src={user.displaySrc ?? "/user.png"}
            className="w-8 h-8 rounded-full object-cover border border-theme"
          />
          <div className="text-xs lg:text-sm capitalise">
            {user.name ?? "name"}
          </div>
        </div>
      )}
      <iframe
        src={link}
        className="w-full h-full overflow-hidden pointer-events-none min-h-[3rem]"
      />
      <div className="my-1">
        <div className="text-md lg:text-lg capitalise">
          {name ?? "Document Name"}
        </div>

        <div className="text-xs sm:text-sm opacity-50">
          Uploaded on: {formattedDate ?? "22/10/2022"}
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <Button
          text="Download Document"
          type="tertiary"
          onClick={() => downloadPDF()}
        />
        {!shared && (
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
        )}
      </div>
    </div>
  );
}

export default Document;
