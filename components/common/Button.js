import React, { useEffect, useState } from "react";

function Button({ type, text, onClick, disabled, icon, style }) {
  const [bgColor, setBgColor] = useState(null);
  const [textColour, setTextColour] = useState(null);
  const [borderStyle, setBorderStyle] = useState(null);
  useEffect(() => {
    switch (type) {
      case "primary":
        setBgColor("bg-theme");
        setTextColour("text-white");
        setBorderStyle("border-2 border-theme");
        break;
      case "secondary":
        setBgColor("bg-black");
        setTextColour("text-white");
        setBorderStyle("border-2 border-black");
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
  }, [type]);

  return (
    <button
      disabled={disabled}
      className={`w-full py-1.5 text-sm sm:text-base hover:opacity-90 ${style} ${bgColor} ${textColour} ${borderStyle}`}
      onClick={onClick}
    >
      {text ? text : icon}
    </button>
  );
}

export default Button;
