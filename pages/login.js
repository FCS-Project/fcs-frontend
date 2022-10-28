import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { signin } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getUser } from "../store/actions/user";
import Modal from "../components/otp/Modal";

function Login() {
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const router = useRouter();

  const onSubmit = () => {
    if (email && password) {
      const dto = { email: email, password: password };
      setModal(true);
    }
  };

  useEffect(() => {
    if (access_token) {
      dispatch(getUser());
      router.push("/profile");
    }
  }, [access_token, router, dispatch]);

  return (
    <>
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          functionOnVerify={() => console.log("verify")}
        />
      ) : (
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
              {error ?? ""}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
