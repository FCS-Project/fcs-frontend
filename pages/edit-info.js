import React, { useState } from "react";
import Button from "../components/common/Button";
import DashboardHeader from "../components/common/DashboardHeader";
import Input from "../components/common/Input";

function EditInfo() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <>
      <DashboardHeader />
      <div className="flex-col align-center justify-center p-4 md:p-6 lg:p-8">
        <h1 className="text-lg md:text-xl lg:text-2xl">
          Edit Your Information
        </h1>
        <div className="my-4 lg:my-5">
          <Input
            heading="Name"
            placeholder="Your Name"
            state={name}
            setState={setName}
          />
          <Input
            heading="Email"
            placeholder="Your Email"
            state={email}
            setState={setEmail}
          />
          <Input
            heading="Mobile Number"
            placeholder="Mobile Number"
            state={mobile}
            setState={setMobile}
          />
          <Input
            heading="Password"
            placeholder="Password"
            type="password"
            state={password}
            setState={setPassword}
          />
          <Button type="secondary" text="Save Info" />
        </div>
      </div>
    </>
  );
}

export default EditInfo;
