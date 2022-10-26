import React from "react";

function Description({ description }) {
  return (
    <div className="gap-1 sm:gap-2 p-3 md:p-4 lg:p-5 border-1 shadow-sm bg-white flex flex-col items-left justify-between border-2">
      <p className="text-md md:text-lg lg:text-xl font-semibold text-theme">
        Description
      </p>
      <p className="lg:text-md md:text-sm text-xs">
        {description ??
          "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India.[4][5][6] Max Healthcare owns and operates healthcare facilities across the National Capital Region (NCR) of Delhi, North India, and the western port city of Mumbai. Max Healthcare opened its first medical center in South Delhi's Panchsheel Park in 2000. The company opened two other secondary care centers in Pitampura in North West Delhi and the eastern Delhi suburb of Noida in 2002."}
      </p>
    </div>
  );
}

export default Description;
