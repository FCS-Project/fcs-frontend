import React from "react";
import OrgCard from "./OrgCard";

function OrgCardsFlex({ userArr }) {
  return (
    <div className="px-5 md:px-8 lg:px-10 flex flex-wrap gap-1">
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
