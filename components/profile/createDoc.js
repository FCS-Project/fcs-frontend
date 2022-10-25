import React, { useState } from "react";
import Button from "../common/Button";
import CreateDocForm from "./createDocForm";

function CreateDoc() {
  const [modal, setModal] = useState(false);
  const submit = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <div className="fixed z-10 left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
          <div className="p-5 w-[80%] h-fit bg-white block p-5 border-2 mx-auto ">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl">Upload Document</h1>
              <div
                className="cursor-pointer float-right text-3xl text-black"
                onClick={() => setModal(false)}
              >
                &times;
              </div>
            </div>
            <CreateDocForm />
            <div className="flex justify-between gap-96">
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
      <div
        onClick={() => setModal(true)}
        className="p-6 md:p-7 lg:p-8 w-3 h-3 sm:h-6 sm:w-6 lg:h-12 lg:w-12 bg-theme fixed bottom-0 right-0 m-2 flex items-center justify-center text-white text-4xl rounded-full cursor-pointer shadow-md"
      >
        +
      </div>
    </>
  );
}

export default CreateDoc;
