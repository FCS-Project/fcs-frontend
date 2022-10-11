import React, { useState } from "react";
import Header from "../components/common/Header";
import Input from "../components/common/Input";

function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dto, setDto] = useState(null);
  const onSubmit = () => {
    if (email && password) {
      setDto({ email: email, password: password });
      console.log(dto);
    }
  };
  return (
    <>
      <Header />
      <div className="mt-20 flex justify-center">
        <div className="flex flex-col border-2 p-10 w-2/3 sm:w-3/5 md:w-2/5 lg:w-1/3 mt-16">
          <Input
            heading={"Email Address"}
            placeholder={"Email"}
            state={email}
            setState={setEmail}
          />
          <Input
            heading={"Password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
