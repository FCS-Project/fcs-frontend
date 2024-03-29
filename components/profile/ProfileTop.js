/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { otpSignIn } from "../../utils/otp/otpSignIn";
import Button from "../common/Button";

function ProfileTop({ name, type, displaySrc, email }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 shadow-md px-8 py-4 md:py-4 md:px-8 lg:px-10 lg:py-5 w-4/5 ml-auto my-6 md:my-8 lg:my-10 mr-auto md:w-2/5">
      <img
        alt="display"
        src={displaySrc == "" || !displaySrc ? "/user.png" : displaySrc}
        className="rounded-full object-cover w-32 h-32 md:h-36 md:w-36 lg:h-40 lg:w-40 border-2 border-theme"
      />
      <div className="flex flex-col items-center">
        <div className="text-center text-xl md:text-2xl">{name}</div>
        <div className="text-lg md:text-xl text-gray-500">{type}</div>
      </div>

      <Button
        type="tertiary"
        text="Edit Info"
        onClick={() => {
          otpSignIn({ email: email }).then((response) => {
            if (response.success) {
              router.push("/edit-info");
            }
          });
        }}
      />
    </div>
  );
}

export default ProfileTop;
