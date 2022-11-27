import React from "react";
import { BounceLoader } from "react-spinners";
import DocumentCard from "../document/DocumentCard";

function ProfileDocs({ documents, loading }) {
  return (
    <div className="w-full p-5 md:p-6 lg:p-8 mt-0 mr-auto ml-auto">
      <h1 className="text-xl md:text-2xl font-semibold">My Documents</h1>
      {loading ? (
        <BounceLoader
          height={8}
          width={200}
          color={"var(--theme)"}
          className="mr-auto ml-auto mt-20"
        />
      ) : (
        <div className="flex justify-center items-center flex-wrap">
          {documents.length > 0 ? (
            <>
              {documents.map((item, i) => {
                return (
                  <DocumentCard
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
            <div className="mt-10 flex justify-center text-theme">
              You have no uploaded documents.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileDocs;
