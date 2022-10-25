/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function ProfileTop() {
  return (
    <div className="shadow-md px-8 py-3 md:py-4 md:px-8 lg:px-10 lg:py-5 flex-col items-center w-4/5 ml-auto my-6 md:my-8 lg:my-10 mr-auto md:w-1/3">
      <img
        alt="display"
        src="https://i.ibb.co/Bswp8RS/avi.jpg"
        className="rounded-full object-cover mx-auto w-32 h-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
      />
      <h1 className="pt-5 text-center text-xl md:text-2xl">XYZ CHOPRA</h1>
      <Link href="/edit-info">
        <Button type="secondary" text="Edit Info" />
      </Link>
    </div>
  );
}

export default ProfileTop;
