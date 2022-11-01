/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import Modal from "../components/otp/Modal";
import { updateUser } from "../store/actions/user";
import uploadImage from "../utils/imageUpload";

function EditInfo() {
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [mobile, setMobile] = useState(user?.mobileNumber ?? "");
  const [location, setLocation] = useState(user?.location ?? "");
  const [description, setDescription] = useState(user?.description ?? "");
  const [modal, setModal] = useState(true);
  const roles = user?.roles[0];
  const router = useRouter();
  const dispatch = useDispatch();

  const [fileDP, setFileDP] = useState("");
  const [fileDPSrc, setFileDPSrc] = useState(user?.displaySrc ?? "");

  const [fileBanner, setFileBanner] = useState("");
  const [fileBannerSrc, setFileBannerSrc] = useState(user?.bannerSrc ?? "");

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

  const submit = () => {
    switch (roles) {
      case "Admin":
        if (name != "" && email != "") {
          const dto = {
            name: name,
            email: email,
            mobileNumber: mobile,
            displaySrc: fileDPSrc,
          };
          dispatch(updateUser(user?.id, dto));
          router.push("/profile");
        }
        break;
      case "User":
        if (name != "" && email != "") {
          const dto = {
            name: name,
            email: email,
            mobileNumber: mobile,
            displaySrc: fileDPSrc,
          };
          dispatch(updateUser(user?.id, dto));
          router.push("/profile");
        }
        break;
      case "Organisation":
        if (name != "" && email != "") {
          const dto = {
            name: name,
            email: email,
            location: location,
            mobileNumber: mobile,
            description: description,
            displaySrc: fileDPSrc,
            bannerSrc: fileBannerSrc,
          };
          dispatch(updateUser(user?.id, dto));
          router.push("/profile");
        }
        break;
    }
    // if (roles == "Admin") {
    //   if (name != "" && email != "") {
    //     const dto = {
    //       name: name,
    //       email: email,
    //       mobileNumber: mobile,
    //       displaySrc: fileDPSrc,
    //     };
    //     dispatch(updateUser(user?.id, dto));
    //     router.push("/profile");
    //   }
    // }
    // if (roles == "User") {
    //   if (name != "" && email != "") {
    //     const dto = {
    //       name: name,
    //       email: email,
    //       mobileNumber: mobile,
    //       displaySrc: fileDPSrc,
    //     };
    //     dispatch(updateUser(user?.id, dto));
    //     router.push("/profile");
    //   }
    // } else if (roles == "Organisation") {
    //   if (name != "" && email != "") {
    //     const dto = {
    //       name: name,
    //       email: email,
    //       location: location,
    //       mobileNumber: mobile,
    //       description: description,
    //       displaySrc: fileDPSrc,
    //       bannerSrc: fileBannerSrc,
    //     };
    //     dispatch(updateUser(user?.id, dto));
    //     router.push("/profile");
    //   }
    // }
  };

  useEffect(() => {
    if (!auth?.verified_otp) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [auth?.verified_otp, router]);

  return (
    <>
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          noCancel={true}
          editInfo={true}
          email={user?.email}
        />
      ) : (
        <>
          <SEO title={"Edit Info"} />
          <Header />
          <div className="flex-col align-center justify-center px-4 md:px-6 lg:px-8">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Edit Your Information
            </h1>
            <div className="flex flex-col gap-2 sm:gap-4 my-2 md:my-4 lg:my-5">
              <Input
                heading="Name"
                placeholder="Your Name"
                state={name}
                setState={setName}
              />
              <Input
                heading="Email"
                placeholder="Your Email"
                state={email}
                setState={setEmail}
              />
              <Input
                heading="Mobile Number"
                placeholder="Mobile Number"
                state={mobile}
                setState={setMobile}
              />
              {roles == "Organisation" && (
                <>
                  <Input
                    heading="Location"
                    placeholder="Location"
                    state={location}
                    setState={setLocation}
                  />
                  <Input
                    heading="Description"
                    placeholder="Description"
                    state={description}
                    setState={setDescription}
                  />
                </>
              )}

              <div className="mt-2 text-sm sm:text-base lg:text-lg">
                Upload Pictures
              </div>

              <div className="flex w-full items-start justify-between mt-2 gap-2 lg:gap-5">
                <form
                  method="post"
                  onChange={(event) => handleFileChange(event, true)}
                  className="w-full"
                >
                  {fileDPSrc && (
                    <>
                      <p className="text-sm mt-5">
                        {fileDP ? "DP Uploaded" : "Current DP"}
                      </p>
                      <img
                        alt="display picture"
                        src={fileDP ? fileDP : fileDPSrc}
                        className="w-1/2 object-contain max-w-1/2  block mr-auto border-theme my-5"
                      />
                    </>
                  )}
                  <label htmlFor="dp">
                    <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                      Upload Dp
                    </div>
                  </label>

                  <input
                    type="file"
                    id="dp"
                    name="dp"
                    accept=".png,.jpg,.jpeg,.webp"
                    style={{ display: "none" }}
                  />
                </form>
              </div>

              {roles == "Organisation" && (
                <>
                  <div className="mt-2 text-sm sm:text-base lg:text-lg">
                    Upload Pictures
                  </div>
                  <div className="flex w-full items-start justify-between mt-2 gap-2 lg:gap-5">
                    <form
                      method="post"
                      onChange={(event) => handleFileChange(event)}
                      className="w-full"
                    >
                      {fileBannerSrc && (
                        <>
                          <p className="text-sm mt-5">
                            {fileBanner ? "Banner Uploaded" : "Current Banner"}
                          </p>
                          <img
                            alt="display picture"
                            src={fileBanner ? fileBanner : fileBannerSrc}
                            className="w-[50%] object-contain max-w-1/2  block mr-auto border-theme my-5"
                          />
                        </>
                      )}
                      <label htmlFor="banner">
                        <div className="w-full py-1.5 text-sm sm:text-base hover:opacity-90 bg-white text-theme border-2 border-theme text-center">
                          Upload Dp
                        </div>
                      </label>

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

              <div className="mt-5 flex items-center justify-between gap-20">
                <Button
                  type="secondary"
                  text="Cancel"
                  style={"w-1/4 sm:w-1/5"}
                />
                <Button
                  type="primary"
                  text="Save Info"
                  style={"w-1/4 sm:w-1/5"}
                  onClick={submit}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditInfo;
