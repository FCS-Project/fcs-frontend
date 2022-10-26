import React, { useState } from "react";
import DashboardHeader from "../../components/common/DashboardHeader";
import UserCard from "../../components/professional/UserCard";
import CreateDoc from "../../components/profile/createDoc";
import PlaceIcon from "@mui/icons-material/Place";
import CreateDocButton from "../../components/profile/createDocButton";
import Document from "../../components/common/Document";

function User() {
  const [document, setDocument] = useState(false);
  return (
    <div className="px-5">
      <DashboardHeader />
      <div className="flex-col p-5">
        <h1 className="text-xl font-semibold my-5 lg:text-3xl">Organization</h1>
        <div className="flex items-center">
          <PlaceIcon className="text-theme text-xs ml-[-0.2rem]" />
          <div className="text-xs">{"New Delhi, Delhi - 110048"}</div>
        </div>
        <img
          alt="display picture"
          src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="object-cover w-full my-5 bg-gray-200 max-h-40 sm:max-h-80 lg:max-h-96"
        />
        <div className="text-xs text-grey mb-5 lg:text-sm">
          Max Healthcare Institute Limited is a hospital chain based in New
          Delhi, India. Max Healthcare owns and operates healthcare facilities
          across the National Capital Region of Delhi, North India, and the
          western port city of Mumbai
        </div>
        {!document ? (
          <CreateDocButton />
        ) : (
          <>
            <h1 className="text-xl font-semibold my-5 lg:text-3xl">
              Your Uploaded Document
            </h1>
            <Document />
          </>
        )}
      </div>
    </div>
  );
}

export default User;
