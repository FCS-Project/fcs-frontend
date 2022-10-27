/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DashboardHeader from "../../components/common/DashboardHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import InfoBox from "../../components/profile/InfoBox";

function User() {
  const [document, setDocument] = useState(false);
  return (
    <div className="bg-slate-50">
      <DashboardHeader />
      <div className="gap-5 ml-auto mr-auto flex flex-col justify-start w-11/12 lg:w-3/4 md:gap-8 lg:gap-10 pb-10">
        <ProfileInfo />
        <InfoBox
          description={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
        />
        <InfoBox
          location={
            "B Block, Sushant Lok 1, Near Huda City Centre MF Husain Marg Sector 43, Gurugram, Haryana 122001."
          }
        />
        <InfoBox email={"aryan20499@iiitd.ac.in"} />
        <InfoBox mobileNumber={"0124 662 3000"} />
      </div>
      {/* {!document ? (
        <CreateDocButton />
      ) : (
        <>
          <h1 className="text-xl font-semibold my-5 lg:text-3xl">
            Your Uploaded Document
          </h1>
          <Document />
        </>
      )} */}
    </div>
  );
}

export default User;
