import React, { useState } from "react";
import Input from "../common/Input";

function VerifyPopup({ otp, setOtp }) {
  return (
    <div className="flex flex-col w-full mt-5">
      <Input heading="OTP" placeholder="OTP" state={otp} setState={setOtp} />
    </div>
  );
}

export default VerifyPopup;
