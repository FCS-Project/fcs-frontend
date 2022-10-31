/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { signin } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Modal from "../components/otp/Modal";
import { otpSignIn } from "../utils/otp/otpSignIn";

function Login() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState(false);
  const router = useRouter();

  const onSubmit = () => {
    if (email && password) {
      // make length greater than 8 after testing
      if (password.length >= 0) {
        const dto = { email: email, password: password };
        if (otp) {
          const otpDto = { email: email };
          otpSignIn(otpDto).then((response) => {
            if (response.success) {
              setModal(response.success);
            }
          });
        } else {
          dispatch(signin(dto));
        }
      } else {
        setError(
          "Password needs to be atleast 8 digits long and should contain numbers and alphabets"
        );
      }
    } else if (!email) {
      setError("Email cannot be empty!");
    } else if (!password) {
      setError("Password cannot be empty!");
    }
  };

  useEffect(() => {
    setError("");
  }, []);

  useEffect(() => {
    if ((!auth?.loading && auth.access_token) || user.data) {
      router.push("/profile");
    }
  }, [auth]);

  useEffect(() => {
    if (auth?.errmess) {
      setError(auth.errmess);
    }
  }, [auth]);

  return (
    <>
      {modal ? (
        <Modal modal={modal} email={email} setModal={setModal} />
      ) : (
        <>
          <SEO title={"Login"} />
          <Header />
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col p-10 w-10/12 sm:w-4/5 md:w-3/5 lg:w-2/5 mt-24 shadow-lg">
              <div className="text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl">
                Login {otp ? "With OTP" : "With Password"}
              </div>
              {error && (
                <div className="text-theme text-center">Error: {error}</div>
              )}
              <Input
                heading={"Email Address"}
                placeholder={"Email"}
                type="email"
                state={email}
                setState={setEmail}
                required={true}
              />
              {!otp && (
                <Input
                  heading={"Password"}
                  type={"password"}
                  placeholder={"Password"}
                  state={password}
                  setState={setPassword}
                  required={true}
                  style={"my-2"}
                />
              )}
              <Button
                type={"primary"}
                text={"Login"}
                onClick={onSubmit}
                style={"my-4"}
              />
              {otp ? (
                <div
                  className="my-1 text-sm md:text-base"
                  onClick={() => setOtp(false)}
                >
                  Login with Password{" "}
                  <span className="text-theme hover:underline cursor-pointer">
                    Click Here.
                  </span>
                </div>
              ) : (
                <div
                  className="my-1 text-sm md:text-base"
                  onClick={() => setOtp(true)}
                >
                  Login with OTP{" "}
                  <span className="text-theme hover:underline cursor-pointer">
                    Click Here.
                  </span>
                </div>
              )}
              <div className="my-1 text-sm md:text-base">
                Not a User?{" "}
                <span className="text-theme hover:underline cursor-pointer">
                  <Link href="/signup">Sign Up</Link>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
