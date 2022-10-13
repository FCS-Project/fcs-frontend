import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dto, setDto] = useState(null);
  const onSubmit = () => {
    if (name != "" && email != "" && password != "") {
      setDto({ name: name, email: email, password: password });
      console.log("dto", dto);
    }
  };
  return (
    <>
      <Header />
      <div className="mt-20 flex justify-center">
        <div className="flex flex-col p-10 w-9/12 sm:w-3/5 md:w-2/5 lg:w-1/3 mt-24 shadow-lg">
          <div className="text-center mb-5 text-lg sm:text-xl lg:text-2xl text-black">
            Sign Up
          </div>
          <Input
            heading={"Name"}
            placeholder={"Name"}
            state={name}
            setState={setName}
            required={true}
          />
          <Input
            heading={"Email Address"}
            placeholder={"Email"}
            state={email}
            setState={setEmail}
            required={true}
          />
          <Input
            heading={"Password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
            required={true}
          />
          <Button type={"primary"} text={"Sign Up"} onClick={onSubmit} />
          <div className="text-sm md:text-base">
            Already a User?{" "}
            <span className="text-theme hover:underline">
              <Link href="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
