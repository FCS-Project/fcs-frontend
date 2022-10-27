import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import SEO from "../components/common/SEO";
import OrgCardsFlex from "../components/professional/OrgCardsFlex";

export default function Home() {
  const [filter, setFilter] = useState("type");
  const [state, setState] = useState("");

  const data = [
    { name: "Avi", type: "hi", location: "delhi" },
    { name: "Avi2", type: "bye", location: "haryana" },
    { name: "Aryan", type: "hello", location: "london" },
  ];

  var filteredData = data.filter((item) => {
    if (filter == "type") {
      return item.type.toLowerCase().includes(state);
    } else if (filter == "name") {
      return item.name.toLowerCase().includes(state);
    } else if (filter == "location") {
      return item.location.toLowerCase().includes(state);
    }
  });

  useEffect(() => {
    console.log("filteredData>>>", filteredData);
  }, [filteredData]);

  return (
    <>
      <SEO />
      <Header />
      <Search
        state={state}
        setState={setState}
        filter={filter}
        setFilter={setFilter}
      />
      <OrgCardsFlex userArr={filteredData} />
    </>
  );
}
