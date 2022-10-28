import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/auth";
import { useRouter } from "next/router";

function Signup() {
  const labelStyle = "my-1 mx-1.5 text-sm sm:text-base lg:text-lg";
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [organistionType, setOrganistionType] = useState("");
  const [userType, setUserType] = useState("");
  const [organisationFlag, setOrganizationFlag] = useState(false);
  const chooseDPButton = useRef(null);
  const chooseBannerButton = useRef(null);

  const handleDPClick = () => {
    chooseDPButton.current.click();
  };

  const handleBannerClick = () => {
    chooseBannerButton.current.click();
  };

  const onSubmit = () => {
    if (name != "" && email != "" && password != "") {
      const data = {
        name: name,
        email: email,
        password: password,
        location: location,
        description: description,
        displaySrc: "",
        BannerSrc: "",
        roles: [organisationFlag ? "Organisation" : "User"],
        type: [organisationFlag ? organistionType : userType],
      };
      dispatch(signup(data));
    }
  };

  // useEffect(() => {
  //   if (access_token) {
  //     router.push("/profile");
  //   }
  // }, [access_token]);

  return (
    <>
      <SEO title={"Sign Up"} />
      <Header />
      <div className="flex justify-center items-center ">
        <div
          className={`flex flex-col p-10 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 shadow-lg ${
            organisationFlag ? " mt-7" : " mt-24"
          }`}
        >
          <div className="text-center mb-2 sm:mb-5 text-lg sm:text-xl lg:text-2xl">
            Sign Up as {organisationFlag ? "an Organisation" : "a User"}
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
            type={"password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
            required={true}
          />

          {organisationFlag && (
            <>
              <Input
                heading={"Description"}
                type={"text"}
                placeholder={"Description"}
                state={description}
                setState={setDescription}
                required={true}
              />
              <Input
                heading={"Location"}
                type={"text"}
                placeholder={"Location"}
                state={location}
                setState={setLocation}
                required={true}
              />
              <div className="mt-2 text-sm sm:text-base lg:text-lg">
                Upload Pictures
              </div>
              <div className="flex w-full items-center justify-between mt-2 gap-2 lg:gap-5">
                <input
                  type="file"
                  name="dp"
                  className="hidden"
                  ref={chooseDPButton}
                ></input>
                <Button
                  text="Profile Pic"
                  type="secondary"
                  onClick={() => {
                    handleDPClick();
                  }}
                />
                <input
                  type="file"
                  name="banner"
                  className="hidden"
                  ref={chooseBannerButton}
                ></input>
                <Button
                  text="Banner Pic"
                  type="secondary"
                  onClick={() => {
                    handleBannerClick();
                  }}
                />
              </div>
            </>
          )}
          <div className="flex items-center my-4">
            {organisationFlag ? (
              <>
                <div className="mr-3 flex items-center">
                  <input
                    id="hospital"
                    type="checkbox"
                    name="hospital"
                    value={organistionType}
                    checked={organistionType == "hospital"}
                    onClick={() => {
                      setOrganistionType("hospital");
                    }}
                  />
                  <label for="hospital" className={labelStyle}>
                    Hospital
                  </label>
                </div>
                <div className="mr-3 flex items-center">
                  <input
                    id="pharmacy"
                    type="checkbox"
                    name="pharmacy"
                    value={organistionType}
                    checked={organistionType == "pharmacy"}
                    onClick={() => {
                      setOrganistionType("pharmacy");
                    }}
                  />
                  <label for="pharmacy" className={labelStyle}>
                    Pharmacy
                  </label>
                </div>
                <div>
                  <input
                    id="insurance"
                    type="checkbox"
                    name="insurance"
                    value={organistionType}
                    checked={organistionType == "insurance"}
                    onClick={() => {
                      setOrganistionType("insurance");
                    }}
                  />
                  <label for="insurance" className={labelStyle}>
                    Insurance
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="mr-3 flex items-center">
                  <input
                    id="patient"
                    type="checkbox"
                    name="patient"
                    value={userType}
                    checked={userType == "patient"}
                    onClick={() => {
                      setUserType("patient");
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
                    value={userType}
                    checked={userType == "professional"}
                    onClick={() => {
                      setUserType("professional");
                    }}
                  />
                  <label for="professional" className={labelStyle}>
                    Professional
                  </label>
                </div>
              </>
            )}
          </div>
          <Button type={"primary"} text={"Sign Up"} onClick={onSubmit} />
          <div className="text-sm md:text-base mt-4">
            Already a User?{" "}
            <span className="text-theme hover:underline">
              <Link href="/login">Login</Link>
            </span>
          </div>
          {organisationFlag ? (
            <div className="text-sm md:text-base mt-4">
              Want to sign up as a User?{" "}
              <span
                className="text-theme hover:underline cursor-pointer"
                onClick={() => setOrganizationFlag(false)}
              >
                Click Here.
              </span>
            </div>
          ) : (
            <div className="text-sm md:text-base mt-4">
              Want to sign up as an Organization?{" "}
              <span
                className="text-theme hover:underline cursor-pointer"
                onClick={() => setOrganizationFlag(true)}
              >
                Click Here.
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
