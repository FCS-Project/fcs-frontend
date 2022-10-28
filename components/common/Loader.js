import React from "react";
import { BounceLoader } from "react-spinners";
import Header from "./Header";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-80">
      <Header />
      <BounceLoader height={8} width={200} color={"var(--theme)"} />
    </div>
  );
}

export default Loader;
