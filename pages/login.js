import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { signin } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { login } from "../store/actions/auth";

function Login() {
  const id = "921392bf-9c79-48fc-80e8-991353f8bbc6";
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = () => {
    if (email && password) {
      const data = { email: email, password: password };
      dispatch(signin(data));
    }
  };

  useEffect(() => {
    if (access_token) {
      console.log("access_token>>>", access_token);
    }
  }, [access_token]);

  return (
    <>
      <SEO title={"Login"} />
      <Header />
      <div className="mt-10 flex justify-center">
        <div className="flex flex-col p-10 w-10/12 sm:w-4/5 md:w-3/5 lg:w-2/5 mt-24 shadow-lg">
          <div className="text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl">
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
            style={"my-2"}
          />
          <Button
            type={"primary"}
            text={"Login"}
            onClick={onSubmit}
            style={"my-2"}
          />
          <div className="my-1 text-sm md:text-base">
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
