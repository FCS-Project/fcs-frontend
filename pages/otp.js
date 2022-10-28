import React, { useState } from "react";
import Modal from "../components/otp/Modal";

function OtpPage() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <h1 onClick={() => setModal(true)}>Modal Open</h1>
    </div>
  );
}

export default OtpPage;
