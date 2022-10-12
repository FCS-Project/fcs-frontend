import React, { useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dto, setDto] = useState(null);
  const onSubmit = () => {
    if (email && password) {
      setDto({ email: email, password: password });
      console.log("dto", dto);
    }
  };

  return (
    <>
      <Header />
      <div className="mt-20 flex justify-center">
        <div className="flex flex-col p-10 w-2/3 sm:w-3/5 md:w-2/5 lg:w-1/3 mt-24 shadow-lg">
          <div className="text-center mb-5 text-lg sm:text-xl lg:text-2xl text-black">
            Login
          </div>
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
          <Button type={"primary"} text={"Login"} onClick={onSubmit} />
        </div>
      </div>
    </>
  );
}

export default Login;
