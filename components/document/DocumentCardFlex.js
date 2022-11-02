import React from "react";
import DocumentCard from "./DocumentCard";

function DocumentCardFlex({ documents, shared }) {
  return (
    <div className="px-2 md:px-8 lg:px-8 flex flex-wrap justify-center md:justify-evenly gap-1">
      {documents?.map((item, i) => {
        return (
          <DocumentCard
            key={i}
            name={item.name}
            link={item.dataSrc}
            user={item.user}
            createdAt={item.createdAt}
            shared={shared}
          />
        );
      })}
    </div>
  );
}

export default DocumentCardFlex;
