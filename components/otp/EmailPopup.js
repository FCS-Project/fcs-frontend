import React, { useState } from "react";
import Input from "../common/Input";

function EmailPopup({ email }) {
  const [emailState, setEmailState] = useState(email);

  return (
    <div className="flex flex-col w-full mt-5">
      <Input
        heading="Email"
        placeholder="Email"
        state={emailState}
        setState={setEmailState}
      />
    </div>
  );
}

export default EmailPopup;
