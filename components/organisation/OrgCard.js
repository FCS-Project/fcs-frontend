/* eslint-disable @next/next/no-img-element */
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";
import BusinessSharpIcon from "@mui/icons-material/BusinessSharp";

function OrgCard({ id, name, imgSrc, location, type }) {
  return (
    <Link href={`user/${id}`}>
      <div className="h-56 w-11/12 sm:w-72 md:w-2/5 lg:w-80 shadow-sm hover:shadow-md bg-white border-2 cursor-pointer m-2 duration-500 overflow-hidden pb-2">
        <img
          alt="display picture"
          src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="object-cover w-full h-3/5 bg-gray-200"
        />
        <div className="flex flex-col px-2 pt-1.5 gap-1">
          <div className="text-md">
            {name?.length > 5 ? name.slice(0, 25) + "..." : name}
          </div>
          {location ? (
            <div className="flex items-center">
              <PlaceIcon
                sx={{ fontSize: "1.25rem" }}
                className="text-theme ml-[-0.1rem] mr-1"
              />
              <div className="text-xs text-gray-500">
                {location?.length > 20
                  ? location.slice(0, 30) + "..."
                  : location}
              </div>
            </div>
          ) : null}
          {type ? (
            <div className="flex items-center">
              <BusinessSharpIcon
                sx={{ fontSize: "1.25rem" }}
                className="text-theme mr-1"
              />
              <div className="text-xs text-gray-500">{type}</div>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default OrgCard;
