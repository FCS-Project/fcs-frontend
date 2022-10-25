import React, { useRef, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function CreateDocForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const chooseDocButton = useRef(null);

  const handleFileClick = () => {
    chooseDocButton.current.click();
  };

  return (
    <div className="flex flex-col w-full">
      <Input
        heading="Document Name"
        placeholder="Document Name"
        state={name}
        setName={setName}
      />
      <Input
        heading="Document Type"
        placeholder="Document Type"
        state={type}
        setName={setType}
      />
      <input
        type="file"
        name="my_file"
        className="hidden"
        ref={chooseDocButton}
      ></input>
      <div className="my-2 sm:my-5">
        <Button
          text="Choose Document"
          type="tertiary"
          onClick={() => {
            handleFileClick();
          }}
        />
      </div>
    </div>
  );
}

export default CreateDocForm;
