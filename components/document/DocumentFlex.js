import React from "react";
import Document from "./document";

function DocumentFlex({ documents, shared }) {
  return (
    <div className="px-2 lg:px-8 flex flex-wrap justify-start gap-1">
      {documents?.map((item, i) => {
        return (
          <Document
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

export default DocumentFlex;
