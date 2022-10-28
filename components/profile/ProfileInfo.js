/* eslint-disable @next/next/no-img-element */
import React from "react";
import BusinessSharpIcon from "@mui/icons-material/BusinessSharp";

function ProfileInfo({ name, type, displaySrc, bannerSrc }) {
  return (
    <div className="w-full h-56 sm:h-60 md:h-72 lg:h-80 flex flex-col justify-start overflow-hidden border-2 bg-white shadow-md">
      <img
        alt="cover picture"
        src={bannerSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
        className="w-full h-2/3 object-cover overflow-hidden bg-gray-200"
      />
      <div className="flex flex-col justify-between pl-2 sm:pl-4 pb-2">
        <img
          alt="display picture"
          src={displaySrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-gray-200 mt-[-3.5rem] md:mt-[-4rem] lg:mt-[-5rem]"
        />
        <p className="mt-1 text-lg md:text-xl lg:text-2xl">
          {name ?? "Aryan Teng"}
        </p>
        {type ? (
          <div className="flex items-center">
            <BusinessSharpIcon className="text-theme mr-1 text-xs" />
            <p className="text-xs md:text-md lg:text- text-gray-500">{type}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileInfo;
