import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/common/Button";
import DashboardHeader from "../components/common/DashboardHeader";
import Input from "../components/common/Input";
import SEO from "../components/common/SEO";
import Modal from "../components/otp/Modal";
import { updateUser } from "../store/actions/user";

function EditInfo() {
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState(user?.name ?? "");
  const [password, setPassword] = useState(user?.password ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [mobile, setMobile] = useState(user?.mobileNumber ?? "");
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();

  const submit = () => {
    //basic error handling
    if (name != "" && email != "" && password != "") {
      const dto = {
        name: name,
        email: email,
        location: location,
        description: description,
        displaySrc: fileDPSrc,
        bannerSrc: fileBannerSrc,
      };
      dispatch(updateUser(user?.id, dto));
    }
  };

  return (
    <>
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          noCancel={true}
          editInfo={true}
          email={email}
        />
      ) : (
        <>
          <SEO title={"Edit Info"} />
          <DashboardHeader />
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
                  onClick={() => submit}
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
