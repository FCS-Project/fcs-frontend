import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";

function Search({ state, setState, filter, setFilter }) {
  function FilterType({ text, selected }) {
    return (
      <div
        className={`${
          selected ? "bg-theme text-white" : "bg-white text-theme"
        } border-2 border-theme text-xs sm:text-sm w-fit py-1 px-3 sm:py-1.5 sm:px-4 cursor-pointer capitalize`}
        onClick={() => setFilter(text)}
      >
        {text}
      </div>
    );
  }

  return (
    <div className="m-5 mb-0">
      <div className="flex justify-start items-center w-full border-2 p-1 br-4 shadow">
        <SearchSharpIcon className="text-theme text-lg sm:text-xl mx-1 sm:mx-2" />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full outline-none focus:border-theme placeholder:text-xs sm:placeholder:text-base"
          placeholder={`Search by ${filter}`}
        />
      </div>
      <div className="flex justify-start items-center gap-3 my-5">
        <FilterListSharpIcon className="text-theme text-3xl sm:text-4xl" />
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
