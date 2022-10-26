import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

function InfoBox({ location, description, email, mobileNumber }) {
  if (description) {
    return (
      <div className="gap-1 sm:gap-2 p-3 md:p-4 lg:p-5 border-1 shadow-sm bg-white flex flex-col items-left justify-between border-2">
        <p className="text-md md:text-lg lg:text-xl font-semibold text-theme">
          Description
        </p>
        <p className="lg:text-md md:text-sm text-xs">
          {description ??
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai"}
        </p>
      </div>
    );
  } else {
    return (
      <div className="gap-1 sm:gap-2 p-3 md:p-4 lg:p-5 border-1 shadow-sm bg-white flex flex-col items-left justify-between border-2">
        <p className="text-md md:text-lg lg:text-xl font-semibold text-theme">
          {location
            ? "Location"
            : email
            ? "Email"
            : mobileNumber && "Mobile Number"}
        </p>
        <div className="flex flex-row items-start sm:items-center gap-5 pb-2 sm:pb-0">
          {location ? (
            <div className="flex items-center">
              <PlaceIcon className="text-theme text-sm md:text-base lg:text-lg ml-[-0.25rem] mr-0.5" />
              <span className="text-gray-500 text-xs md:text-base">
                {location ?? "New Delhi, Delhi - 110048"}
              </span>
            </div>
          ) : email ? (
            <div className="flex items-center">
              <EmailSharpIcon className="text-theme text-sm md:text-base lg:text-lg ml-[-0.25rem] mr-1" />
              <span className="text-gray-500 text-xs md:text-base">
                {email ?? "email@email.com"}
              </span>
            </div>
          ) : mobileNumber ? (
            <div className="flex items-center">
              <LocalPhoneSharpIcon className="text-theme text-sm md:text-base lg:text-lg ml-[-0.25rem] mr-1" />
              <span className="text-gray-500 text-xs md:text-base">
                {mobileNumber ?? "9711171503"}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default InfoBox;
