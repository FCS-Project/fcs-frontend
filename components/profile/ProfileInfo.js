/* eslint-disable @next/next/no-img-element */
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";

function ProfileInfo({ name, imgSrc, location, contact }) {
  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col justify-start overflow-hidden border-2">
      <img
        alt="display picture"
        src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
        className="w-full h-2/3 object-cover overflow-hidden bg-gray-200"
      />
      <div className="flex flex-col justify-between pl-2 sm:pl-4 gap-1">
        <img
          alt="display picture"
          src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="w-20 md:w-24 lg:w-28 rounded-full object-cover overflow-hidden bg-gray-200 mt-[-3.5rem] md:mt-[-4rem] lg:mt-[-5rem]"
        />
        <p className="text-xl md:text-2xl lg:text-3xl">
          {name ?? "Aryan Teng"}
        </p>
        <div className="flex flex-row items-start sm:items-center gap-5 pb-2 sm:pb-0">
          <div className="flex items-center">
            <PlaceIcon className="text-theme text-sm md:text-base lg:text-lg ml-[-0.25rem] mr-0.5" />
            <span className="text-gray-500 text-xs md:text-base">
              {location ?? "New Delhi, Delhi - 110048"}
            </span>
          </div>
          <div className="flex items-center">
            <LocalPhoneSharpIcon className="text-theme text-sm md:text-base lg:text-lg ml-[-0.25rem] mr-1" />
            <span className="text-gray-500 text-xs md:text-base">
              {contact ?? "9711171503"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
