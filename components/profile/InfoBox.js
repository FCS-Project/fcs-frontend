import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

function InfoBox({ location, description, email, mobileNumber }) {
  const contentStyle = "lg:text-md md:text-sm text-xs text-gray-500";
  const titleStyle = "text-md md:text-lg lg:text-xl font-semibold text-theme";
  const containerStyle =
    "gap-1 sm:gap-2 p-3 md:p-4 lg:p-5 border-1 shadow-sm bg-white flex flex-col items-left justify-between border-2 shadow-md";
  const iconStyle = "text-theme ml-[-0.25rem] mr-1";
  if (description) {
    return (
      <div className={containerStyle}>
        <p className={titleStyle}>Description</p>
        <p className={contentStyle}>
          {description ??
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."}
        </p>
      </div>
    );
  } else {
    return (
      <div className={containerStyle}>
        <p className={titleStyle}>
          {location
            ? "Location"
            : email
            ? "Email Address"
            : mobileNumber && "Mobile Number"}
        </p>
        <div className="flex flex-row items-start sm:items-center gap-5 pb-2 sm:pb-0">
          {location ? (
            <div className="flex md:items-center">
              <PlaceIcon className={`${iconStyle} mt-0.5 md:mt-0`} />
              <span className={contentStyle}>
                {location ?? "New Delhi, Delhi - 110048"}
              </span>
            </div>
          ) : email ? (
            <a href={`mailto:${email}`}>
              <div className="flex items-center ml-1">
                <EmailSharpIcon className={iconStyle} />
                <span className={contentStyle}>
                  {email ?? "email@email.com"}
                </span>
              </div>
            </a>
          ) : mobileNumber ? (
            <div className="flex items-center ml-1">
              <LocalPhoneSharpIcon className={iconStyle} />
              <span className={contentStyle}>
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
