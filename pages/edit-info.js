import React, { useState } from "react";
import Button from "../components/common/Button";
import DashboardHeader from "../components/common/DashboardHeader";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";

function EditInfo() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <>
      <SEO title={"Edit Info"} />
      <DashboardHeader />
      <div className="flex-col align-center justify-center p-4 md:p-6 lg:p-8">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Edit Your Information
        </h1>
        <div className="flex flex-col gap-1 sm:gap-2 my-2 md:my-4 lg:my-5">
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
          <div className="mt-5">
            <Button type="primary" text="Save Info" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfo;
