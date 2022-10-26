/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DashboardHeader from "../../components/common/DashboardHeader";
import CreateDocButton from "../../components/profile/createDocButton";
import Document from "../../components/common/Document";
import ProfileInfo from "../../components/profile/ProfileInfo";
import InfoBox from "../../components/profile/InfoBox";

function User() {
  const [document, setDocument] = useState(false);
  return (
    <>
      <DashboardHeader />
      <div className="gap-5 ml-auto mr-auto flex flex-col justify-start w-11/12 lg:w-3/4 md:gap-8 lg:gap-10 pb-10">
        <ProfileInfo />
        <InfoBox location={"New Delhi, Delhi - 110048 "} />
        <InfoBox email={"avi@iiitd.ac.in"} />
        <InfoBox mobileNumber={"9899659815"} />
        <InfoBox description={"hi"} />
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
    </>
  );
}

export default User;
