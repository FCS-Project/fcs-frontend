import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";

function Signup() {
  const labelStyle = "my-1 mx-1.5 text-sm sm:text-base lg:text-lg text-black";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [professional, setProfessional] = useState(false);
  const [patient, setPatient] = useState(false);
  const onSubmit = () => {
    if (name != "" && email != "" && password != "") {
      const dto = {
        name: name,
        email: email,
        password: password,
        roles: [patient ? "Patient" : "Professional"],
      };
      console.log("dto", dto);
    }
  };

  return (
    <>
      <SEO title={"Sign Up"} />
      <Header />
      <div className="mt-10 flex justify-center">
        <div className="flex flex-col p-10 w-10/12 sm:w-4/5 md:w-3/5 lg:w-2/5 mt-24 shadow-lg">
          <div className="text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl text-black">
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
            style="my-2"
          />
          <Input
            heading={"Password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
            required={true}
          />
          <div className="flex items-center my-4">
            <div className="mr-3">
              <input
                id="patient"
                type="checkbox"
                name="patient"
                value={patient}
                checked={patient}
                onClick={() => {
                  setprofessional(false);
                  setPatient(!patient);
                }}
              />
              <label for="patient" className={labelStyle}>
                Patient
              </label>
            </div>
            <div>
              <input
                id="professional"
                type="checkbox"
                name="professional"
                value={professional}
                checked={professional}
                onClick={() => {
                  setPatient(false);
                  setProfessional(!professional);
                }}
              />
              <label for="professional" className={labelStyle}>
                Professional
              </label>
            </div>
          </div>
          <Button type={"primary"} text={"Sign Up"} onClick={onSubmit} />
          <div className="text-sm md:text-base mt-4">
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
