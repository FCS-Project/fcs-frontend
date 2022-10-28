import React, { useState } from "react";
import Input from "../common/Input";

function VerifyPopup() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex flex-col w-full mt-5">
      <Input heading="OTP" placeholder="OTP" state={otp} setState={setOtp} />
    </div>
  );
}

export default VerifyPopup;
