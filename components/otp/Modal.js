import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../store/actions/auth";
import { encrypt } from "../../utils/crypto/encryption";
import { otpSignIn } from "../../utils/otp/otpSignIn";
import Button from "../common/Button";
import VerifyPopup from "./VerifyPopup";

function Modal({ email, modal, setModal, noCancel, editInfo }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const submit = () => {
    const dto = { email: email, otp: encrypt(otp), editInfo: editInfo };
    dispatch(verifyOtp(dto));
  };

  const otpSubmit = async () => {
    const dto = { email: email };
    otpSignIn(dto)
      .then((response) => {
        if (response.success) {
          setError(null);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  const verified = () => {
    setModal(false);
  };

  useEffect(() => {
    if (auth?.otp_verified) {
      verified();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      {modal && (
        <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
          <div className="p-5 w-11/12 sm:w-10/12 md:w-9/12 lg:w-1/2 h-fit bg-white block p-5 border-2 mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl">Verify OTP</h1>
              {/* <div className="text-theme">{error}</div> */}

              <div
                className="cursor-pointer float-right text-3xl"
                onClick={() =>
                  editInfo ? router.push("/profile") : setModal(false)
                }
              >
                &times;
              </div>
            </div>
            <VerifyPopup otp={otp} setOtp={setOtp} />
            <div className="mt-5 flex justify-between gap-10 sm:gap-52 md:gap-64 lg:gap-72 lg:mt-5">
              {!noCancel && (
                <Button
                  text={"Cancel"}
                  type="secondary"
                  onClick={() => {
                    setModal(false);
                  }}
                />
              )}
              {editInfo && (
                <Button
                  text={"Resend OTP"}
                  type="secondary"
                  onClick={() => {
                    otpSubmit();
                  }}
                />
              )}
              <Button text={"Submit"} type="primary" onClick={submit} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
