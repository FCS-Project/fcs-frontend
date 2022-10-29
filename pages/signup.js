/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/auth";
import { useRouter } from "next/router";
import uploadImage from "../utils/imageUpload";

function Signup() {
  const labelStyle = "my-1 mx-1.5 text-sm sm:text-base lg:text-lg";
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [organistionType, setOrganistionType] = useState("");
  const [userType, setUserType] = useState("");
  const [organisationFlag, setOrganizationFlag] = useState(false);
  const [fileDP, setFileDP] = useState("");
  const [fileDPSrc, setFileDPSrc] = useState("");
  const [fileBanner, setFileBanner] = useState("");
  const [fileBannerSrc, setFileBannerSrc] = useState("");
  const handleFileChange = async (changeEvent, dp) => {
    const reader = new FileReader();
    if (dp) {
      reader.onload = function (onLoadEvent) {
        setFileDP(onLoadEvent.target.result);
      };
      reader.readAsDataURL(changeEvent.target.files[0]);
      await uploadImage(changeEvent, setFileDPSrc, "dp");
    } else {
      reader.onload = function (onLoadEvent) {
        setFileBanner(onLoadEvent.target.result);
      };
      reader.readAsDataURL(changeEvent.target.files[0]);
      await uploadImage(changeEvent, setFileBannerSrc, "banner");
    }
  };

  const onSubmitOrg = () => {
    if (name != "" && email != "" && password != "") {
      const dto = {
        name: name,
        email: email,
        password: password,
        roles: [organisationFlag ? "Organisation" : "User"],
        type: [organisationFlag ? organistionType : userType],
        location: location,
        description: description,
        displaySrc: fileDPSrc,
        bannerSrc: fileBannerSrc,
      };
      dispatch(signup(dto));
      router.push("/profile");
    }
  };

  const onSubmit = () => {
    if (name != "" && email != "" && password != "") {
      const dto = {
        name: name,
        email: email,
        password: password,
        roles: [organisationFlag ? "Organisation" : "User"],
        type: [organisationFlag ? organistionType : userType],
        displaySrc: fileDPSrc,
      };
      dispatch(signup(dto));
      router.push("/profile");
    }
  };

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

          {!organisationFlag && (
            <>
              <div className="mt-2 text-sm sm:text-base lg:text-lg">
                Upload Pictures
              </div>
              <div className="flex w-full items-start justify-between mt-2 gap-2 lg:gap-5">
                <form
                  method="post"
                  onChange={(event) => handleFileChange(event, true)}
                  className="w-[100%]"
                >
                  <label htmlFor="dp">
                    <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                      Upload Dp
                    </div>
                  </label>

                  {fileDPSrc && (
                    <>
                      <p className="text-sm mt-5">Image Uploaded</p>
                      <img
                        alt="display picture"
                        src={fileDP}
                        className="w-[50%] max-h-[10rem] object-contain max-w-1/2  block ml-auto mr-auto border-theme my-5"
                      />
                    </>
                  )}

                  <input
                    type="file"
                    id="dp"
                    name="dp"
                    accept=".png,.jpg,.jpeg,.webp"
                    style={{ display: "none" }}
                  />
                </form>
              </div>
            </>
          )}

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
              <div className="flex w-full items-start justify-between mt-2 gap-2 lg:gap-5">
                <form
                  method="post"
                  onChange={(event) => handleFileChange(event, true)}
                  className="w-[50%]"
                >
                  <label htmlFor="dp">
                    <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                      Upload Dp
                    </div>
                  </label>

                  {fileDPSrc && (
                    <>
                      <p className="text-sm mt-5">Image Uploaded</p>
                      <img
                        alt="display picture"
                        src={fileDP}
                        className="w-[100%] h-[10rem] object-cover max-w-1/2  block ml-auto mr-auto border-theme my-5"
                      />
                    </>
                  )}

                  <input
                    type="file"
                    id="dp"
                    name="dp"
                    accept=".png,.jpg,.jpeg,.webp"
                    style={{ display: "none" }}
                  />
                </form>

                <form
                  method="post"
                  onChange={(event) => handleFileChange(event, false)}
                  className="w-[50%]"
                >
                  <label htmlFor="banner">
                    <div className="w-[full] py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                      Upload Banner
                    </div>
                  </label>

                  {fileBannerSrc && (
                    <>
                      <p className="text-sm mt-5">Image Uploaded</p>
                      <img
                        alt="display picture"
                        src={fileBanner}
                        className="w-[100%] object-cover h-[10rem] block ml-auto mr-auto border-theme my-5"
                      />
                    </>
                  )}
                  <input
                    type="file"
                    id="banner"
                    name="banner"
                    accept=".png,.jpg,.jpeg,.webp"
                    style={{ display: "none" }}
                  />
                </form>
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
                    checked={organistionType == "Hospital"}
                    onClick={() => {
                      setOrganistionType("Hospital");
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
                    checked={organistionType == "Pharmacy"}
                    onClick={() => {
                      setOrganistionType("Pharmacy");
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
                    checked={organistionType == "Insurance"}
                    onClick={() => {
                      setOrganistionType("Insurance");
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
                    checked={userType == "Patient"}
                    onClick={() => {
                      setUserType("Patient");
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
                    checked={userType == "Professional"}
                    onClick={() => {
                      setUserType("Professional");
                    }}
                  />
                  <label for="professional" className={labelStyle}>
                    Professional
                  </label>
                </div>
              </>
            )}
          </div>
          <Button
            type={"primary"}
            text={"Sign Up"}
            onClick={organisationFlag ? onSubmitOrg : onSubmit}
          />
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
