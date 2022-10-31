import React from "react";
import Document from "../document/Document";

function ProfileDocs({ documents }) {
  return (
    <div className="w-full p-5 md:p-6 lg:p-8 mt-0 mr-auto ml-auto">
      <h1 className="text-xl md:text-2xl font-semibold">My Documents</h1>
      <div className="flex justify-center items-center flex-wrap">
        {documents.length > 0 ? (
          <>
            {documents.map((item, i) => {
              return (
                <Document
                  id={item.id}
                  link={item.dataSrc}
                  createdAt={item.createdAt}
                  name={item.name}
                  key={i}
                />
              );
            })}
          </>
        ) : (
          <div className="mt-20">You have no uploaded documents :(</div>
        )}
      </div>
    </div>
  );
}

export default ProfileDocs;
