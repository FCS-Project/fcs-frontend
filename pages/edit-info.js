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
      <div className="flex-col align-center justify-center p-[3rem]">
        <h1 className="text-2xl">Edit Info</h1>
        <div className="my-5">
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
