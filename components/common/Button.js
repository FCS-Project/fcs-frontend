import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="w-full py-2 bg-theme text-white my-4 text-sm sm:text-base"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
