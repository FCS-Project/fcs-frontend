import React from "react";
import OrgCard from "./OrgCard";

function OrgCardsFlex({ userArr }) {
  return (
    <div className="px-2 lg:px-8 flex flex-wrap justify-center gap-1">
      {userArr ? (
        <>
          {userArr.map((item, i) => {
            return (
              <OrgCard
                key={i}
                id={item.id}
                name={item.name}
                imgSrc={item.bannerSrc}
                desc={item.desc}
                location={item.location}
                type={item.type}
              />
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default OrgCardsFlex;
