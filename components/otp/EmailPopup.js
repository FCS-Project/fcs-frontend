import React, { useState } from "react";
import Input from "../common/Input";

function EmailPopup({ emailState, setEmailState }) {
  return (
    <div className="flex flex-col w-full mt-5">
      <p className="text-xs md:text-sm mb-5">
        You will receive your otp on the email given below. You might have to
        check the spam folder aswell.
      </p>
      <Input
        heading="Email"
        placeholder="Email"
        state={emailState}
        setState={setEmailState}
        disabled={true}
      />
    </div>
  );
}

export default EmailPopup;
