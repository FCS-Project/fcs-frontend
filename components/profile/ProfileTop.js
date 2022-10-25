/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function ProfileTop() {
  return (
    <div className="shadow-md p-10 pt-5 pb-5 flex-col content-center items-center w-4/5 ml-auto mr-auto my-10 md:w-1/3">
      <img
        alt="display"
        src="https://i.ibb.co/Bswp8RS/avi.jpg"
        className="rounded-full object-cover mx-auto h-[8rem] w-[8rem] lg:h-[7rem] lg:w-[7rem]"
      />
      <h1 className="pt-5 text-center text-xl md:text-2xl">XYZ CHOPRA</h1>
      <Link href="/edit-info">
        <Button type="secondary" text="Edit Info" />
      </Link>
    </div>
  );
}

export default ProfileTop;
