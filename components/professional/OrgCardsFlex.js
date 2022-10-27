import React from "react";
import OrgCard from "./OrgCard";

function OrgCardsFlex({ userArr }) {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {userArr ? (
        <>
          {userArr.map((item) => {
            <OrgCard
              id={item.id}
              name={item.name}
              imgSrc={item.bannerSrc}
              desc={item.desc}
              location={item.location}
              type={item.type}
            />;
          })}
        </>
      ) : (
        <></>
      )}
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
      <OrgCard
        desc={
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
        }
        location={"Saket, New Delhi, Delhi, 110017"}
        type={"Hospital"}
      />
    </div>
  );
}

export default OrgCardsFlex;