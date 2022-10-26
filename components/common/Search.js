import React from "react";
import Input from "./Input";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

function Search({ state, setState, filter, setFilter }) {
  function FilterType({ text, selected }) {
    return (
      <div
        className={`${
          selected ? "bg-theme text-white" : "bg-white text-theme"
        } border-2 border-theme  text-sm w-fit py-2 px-5 my-5 cursor-pointer capitalize`}
        onClick={() => setFilter(text)}
      >
        {text}
      </div>
    );
  }

  return (
    <div className="m-5 mb-0">
      <div className="flex justify-start items-center w-full border-2 p-1 br-4">
        <SearchSharpIcon className="text-theme mx-2" />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full outline-none focus:border-theme  placeholder:text-xs sm:placeholder:text-base"
          placeholder={`Search by ${filter}`}
        />
      </div>
      <div className="flex justify-start align-center gap-3">
        <FilterType text="type" selected={filter == "type" ? true : false} />
        <FilterType text="name" selected={filter == "name" ? true : false} />
        <FilterType
          text="location"
          selected={filter == "location" ? true : false}
        />
      </div>
    </div>
  );
}

export default Search;
