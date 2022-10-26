/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProfileInfo({ name, imgSrc, location, contact }) {
  return (
    <div className="w-full h-56 sm:h-60 md:h-72 lg:h-80 flex flex-col justify-start overflow-hidden border-2">
      <img
        alt="display picture"
        src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
        className="w-full h-2/3 object-cover overflow-hidden bg-gray-200"
      />
      <div className="flex flex-col justify-between pl-2 gap-1">
        <img
          alt="display picture"
          src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="w-20 md:w-24 lg:w-28 rounded-full object-cover overflow-hidden bg-gray-200 mt-[-3.5rem] md:mt-[-4rem] lg:mt-[-5rem]"
        />
        <p className="text-xl md:text-2xl lg:text-3xl">
          {name ?? "Aryan Teng"}
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
