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
    <div>
      <h1 className="text-xl md:text-2xl mb-10">Upload Document</h1>
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
      <Button
        text="Choose Document"
        type="secondary"
        onClick={() => {
          handleFileClick();
        }}
      />
      <Button text="Submit" type="primary" />
    </div>
  );
}

export default CreateDocForm;
