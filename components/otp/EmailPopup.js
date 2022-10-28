import React, { useState } from "react";
import Input from "../common/Input";

function EmailPopup() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col w-full mt-5">
      <Input
        heading="Email"
        placeholder="Email"
        state={email}
        setState={setEmail}
      />
    </div>
  );
}

export default EmailPopup;
