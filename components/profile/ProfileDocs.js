import React from "react";
import Document from "../common/Document";

function ProfileDocs() {
  return (
    <div className="w-[100%] p-10 m-10 mt-0 mr-auto ml-auto">
      <h1 className="text-xl md:text-2xl">My Documents</h1>
      <div className="flex justify-center items-center flex-wrap ">
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
      </div>
    </div>
  );
}

export default ProfileDocs;
