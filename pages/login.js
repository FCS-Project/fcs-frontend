import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { login } from "../utils/auth/login";

function Login() {
  const id = "921392bf-9c79-48fc-80e8-991353f8bbc6";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onSubmit = () => {
    if (email != "" && password != "") {
      const dto = { email: email, password: password };
      loginUser(dto);
      console.log("dto", dto);
    }
  };

  const loginUser = (dto) => {
    login(dto).then((response) => {
      if (response.error) {
        setError(response.error);
        setUser(null);
      } else {
        setUser(response.access_token);
        setLoading(false);
        setError(null);
      }
    });
  };

  return (
    <>
      <SEO title={"Login"} />
      <Header />
      <div className="mt-20 flex justify-center">
        <div className="flex flex-col p-10 w-9/12 sm:w-3/5 md:w-2/5 lg:w-1/3 mt-24 shadow-lg">
          <div className="text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl text-black">
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
            type={"password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
            required={true}
          />
          <Button type={"primary"} text={"Login"} onClick={onSubmit} />
          <div className="text-sm md:text-base">
            Not a User?{" "}
            <span className="text-theme hover:underline">
              <Link href="/signup">Sign Up</Link>
            </span>
          </div>
          {loading ? <p>Loading..</p> : <div>{user}</div>}
          {error ?? ""}
        </div>
      </div>
    </>
  );
}

export default Login;
