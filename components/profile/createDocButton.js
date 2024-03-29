import React, { useState } from "react";
import Button from "../common/Button";
import CreateDocForm from "./createDocForm";

function CreateDocButton() {
  const [modal, setModal] = useState(false);
  const submit = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
          <div className="p-5 w-11/12 sm:w-10/12 md:w-9/12 lg:w-1/2 h-fit bg-white block p-5 border-2 mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl">Upload Document</h1>
              <div
                className="cursor-pointer float-right text-3xl"
                onClick={() => setModal(false)}
              >
                &times;
              </div>
            </div>
            <CreateDocForm />
            <div className="mt-1 md:mt-2 flex justify-between gap-40 sm:gap-52 md:gap-64 lg:gap-72">
              <Button
                text="Cancel"
                type="secondary"
                onClick={() => setModal(false)}
              />
              <Button text="Submit" type="primary" onClick={() => submit()} />
            </div>
          </div>
        </div>
      )}
      <Button
        onClick={() => setModal(true)}
        text="Upload Document"
        type="primary"
      />
    </>
  );
}

export default CreateDocButton;
