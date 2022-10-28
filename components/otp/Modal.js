import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../store/actions/auth";
import { otpSignIn } from "../../utils/otp/otpSignIn";
import Button from "../common/Button";
import EmailPopup from "./EmailPopup";
import VerifyPopup from "./VerifyPopup";

function Modal({ email, modal, setModal, noCancel, editInfo }) {
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const success = useSelector((state) => state.auth.success);
  const router = useRouter();
  const [emailState, setEmailState] = useState(email);

  const submit = () => {
    dispatch(verifyOtp({ email: emailState, otp: otp, editInfo: editInfo }));
  };

  useEffect(() => {
    if (access_token && !editInfo) {
      dispatch(getUser());
      setModal(false);
      router.push("/profile");
    }
  }, [access_token, dispatch]);

  useEffect(() => {
    if (success) {
      setModal(false);
    }
  }, [success, dispatch]);

  return (
    <div>
      {modal && (
        <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
          <div className="p-5 w-11/12 sm:w-10/12 md:w-9/12 lg:w-1/2 h-fit bg-white block p-5 border-2 mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl">
                {!verify ? "Your Email" : "Verify OTP"}
              </h1>
              {!noCancel && (
                <div
                  className="cursor-pointer float-right text-3xl"
                  onClick={() => setModal(false)}
                >
                  &times;
                </div>
              )}
            </div>

            {!verify ? (
              <EmailPopup
                emailState={emailState}
                setEmailState={setEmailState}
              />
            ) : (
              <VerifyPopup otp={otp} setOtp={setOtp} />
            )}

            <div className="mt-5 flex justify-between gap-10 sm:gap-52 md:gap-64 lg:gap-72 lg:mt-5">
              {!noCancel && (
                <Button
                  text={verify ? "Cancel" : "Back"}
                  type="secondary"
                  onClick={() => {
                    !verify ? setModal(false) : setVerify(false);
                  }}
                />
              )}
              <Button
                text={!verify ? "Next" : "Submit"}
                type="primary"
                onClick={() => {
                  !verify && otpSignIn({ email: email });
                  !verify ? setVerify(true) : submit();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
