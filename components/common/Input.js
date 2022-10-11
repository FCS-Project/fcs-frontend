import React from "react";

function Input({ heading, type, placeholder, state, setState, disabled }) {
  return (
    <div className="my-2">
      <div className="my-1 text-sm sm:text-base lg:text-lg">{heading}</div>
      <input
        className="w-full outline-none border-2 p-1 br-4 focus:border-theme placeholder:text-xs sm:placeholder:text-base"
        type={type ?? "text"}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
