import React, { useState } from "react";
import Button from "../common/Button";
import CreateDocForm from "./createDocForm";

function CreateDoc() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <div className="fixed z-10 left-0 top-0 w-[100%] h-[100%] overflow-auto bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
          <div className="p-5 w-[80%] h-fit bg-white block p-5 border-2 mx-auto ">
            <div
              className="cursor-pointer float-right text-3xl"
              onClick={() => setModal(false)}
            >
              &times;
            </div>
            <CreateDocForm />
            <Button
              text="Submit"
              type="primary"
              onClick={() => setModal(false)}
            />
          </div>
        </div>
      )}
      <div
        onClick={() => setModal(true)}
        className="h-[3rem] w-[3rem] bg-theme fixed bottom-0 right-0 m-2 flex items-center justify-center p-[2rem] text-white text-4xl rounded-full cursor-pointer shadow-md"
      >
        +
      </div>
    </>
  );
}

export default CreateDoc;
