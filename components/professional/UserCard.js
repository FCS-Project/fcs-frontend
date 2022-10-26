/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

function UserCard({ id, name, imgSrc, desc, location }) {
  const description = desc?.slice(0, 100);
  const router = useRouter();
  return (
    <div
      className="max-h-72 w-11/12 sm:w-5/12 md:w-64 shadow-sm hover:shadow-md bg-white border-2 cursor-pointer m-2 duration-500 overflow-hidden"
      // onClick={() => router.push(`/user/${id}`)}
    >
      <Link href="user/1">
        <img
          alt="display picture"
          src={imgSrc ?? "https://i.ibb.co/myvq6GR/aryan.jpg"}
          className="object-cover w-full h-3/5 bg-gray-200"
        />
      </Link>

      <div className="flex flex-col px-2 pt-1.5 gap-1">
        <Link href="user/1">
          <div className="text-md">
            {name?.length > 30 ? name.slice(0, 30) + "..." : name}
            Max Hospital
          </div>
        </Link>
        {location ? (
          <div className="flex items-center">
            <PlaceIcon className="text-theme text-xs ml-[-0.2rem]" />
            <div className="text-xs">{location}</div>
          </div>
        ) : null}

        <p className="text-gray-600 text-xs font-light">
          {desc?.length > 50 ? (
            <>
              {description}
              <span className="text-gray-400">...Read More</span>
            </>
          ) : (
            desc
          )}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
