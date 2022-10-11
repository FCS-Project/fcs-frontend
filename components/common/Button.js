import React, { useEffect, useState } from "react";

function Button({ type, text, onClick }) {
  const [bgColor, setBgColor] = useState(null);
  const [textColour, setTextColour] = useState(null);
  const [borderStyle, setBorderStyle] = useState(null);
  useEffect(() => {
    switch (type) {
      case "primary":
        setBgColor("bg-theme");
        setTextColour("text-white");
        break;
      case "secondary":
        setBgColor("bg-black");
        setTextColour("text-white");
        break;
      case "tertiary":
        setBgColor("bg-white");
        setTextColour("text-theme");
        setBorderStyle("border-2 border-theme");
        break;
      default:
        setBgColor("");
        setTextColour("");
    }
  }, []);

  return (
    <button
      className={`${bgColor} ${textColour} ${borderStyle} w-full py-2 my-4 text-sm sm:text-base hover:opacity-90`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
