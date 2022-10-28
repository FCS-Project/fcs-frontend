/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function ProfileTop({ name, displaySrc }) {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 shadow-md px-8 py-4 md:py-4 md:px-8 lg:px-10 lg:py-5 w-4/5 ml-auto my-6 md:my-8 lg:my-10 mr-auto md:w-1/3">
      <img
        alt="display"
        src={displaySrc}
        className="rounded-full object-cover w-32 h-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
      />
      <h1 className="text-center text-xl md:text-2xl">{name}</h1>
      <Link href="/edit-info">
        <Button type="tertiary" text="Edit Info" />
      </Link>
    </div>
  );
}

export default ProfileTop;
