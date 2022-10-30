import React from "react";
import Document from "../common/Document";

function ProfileDocs({ documents }) {
  return (
    <div className="w-full p-6 md:p-8 lg:p-10 mt-0 mr-auto ml-auto">
      <h1 className="text-xl md:text-2xl font-semibold">My Documents</h1>
      <div className="flex justify-center items-center flex-wrap">
        {documents.length > 0 ? (
          <>
            {documents.map((item, i) => {
              return <Document key={i} />;
            })}
          </>
        ) : (
          <div>You have no uploaded documents.</div>
        )}
      </div>
    </div>
  );
}

export default ProfileDocs;
