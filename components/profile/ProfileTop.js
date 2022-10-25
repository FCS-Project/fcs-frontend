import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function ProfileTop() {
  return (
    <div className="shadow-md p-10 pt-5 pb-5 flex-col content-center items-center w-[80%] ml-auto mr-auto my-10 md:w-fit ">
      <img
        src="https://i.ibb.co/Bswp8RS/avi.jpg"
        className="rounded-full object-cover mx-auto h-[8rem] w-[8rem] lg:h-[7rem] lg:w-[7rem]"
      />
      <h1 className="pt-5 text-center text-xl md:text-2xl">User's Name</h1>
      <Link href="/edit-info">
        <Button type="secondary" text="Edit Info" />
      </Link>
    </div>
  );
}

export default ProfileTop;
