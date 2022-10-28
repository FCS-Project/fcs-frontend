/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import SEO from "../components/common/SEO";
import OrgCardsFlex from "../components/organisation/OrgCardsFlex";
import Loader from "../components/common/Loader";
import { getHome } from "../utils/user/getHome";

export default function Home() {
  const [filter, setFilter] = useState("type");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchHomeData = async () => {
    const response = await getHome();
    if (response.success) {
      setData(response.data);
      setLoading(false);
      var filteredData = response.data.filter((item) => {
        if (filter == "type") {
          return item.type[0].toLowerCase().includes(state);
        } else if (filter == "name") {
          return item.name.toLowerCase().includes(state);
        } else if (filter == "location") {
          return item.location.toLowerCase().includes(state);
        }
      });
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO />
          <Header />
          <Search
            state={state}
            setState={setState}
            filter={filter}
            setFilter={setFilter}
          />
          <OrgCardsFlex userArr={data} />
        </>
      )}
    </>
  );
}
