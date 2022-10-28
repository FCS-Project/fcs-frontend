import React, { useState } from "react";
import Input from "../common/Input";

function VerifyPopup({ otp, setOtp }) {
  return (
    <div className="flex flex-col w-full mt-5">
      <p className="text-xs md:text-sm mb-5">
        Enter the OTP sent on your email to continue.
      </p>
      <Input heading="OTP" placeholder="OTP" state={otp} setState={setOtp} />
    </div>
  );
}

export default VerifyPopup;
