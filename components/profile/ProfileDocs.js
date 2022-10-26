import React from "react";
import Document from "../common/Document";

function ProfileDocs() {
  return (
    <div className="w-full p-6 md:p-8 lg:p-10 mt-0 mr-auto ml-auto">
      <h1 className="text-xl md:text-2xl font-semibold">My Documents</h1>
      <div className="flex justify-center items-center flex-wrap">
        <Document />
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
