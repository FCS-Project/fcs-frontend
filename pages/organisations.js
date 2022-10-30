/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import SEO from "../components/common/SEO";
import OrgCardsFlex from "../components/organisation/OrgCardsFlex";
import Loader from "../components/common/Loader";
import { getHome } from "../utils/user/getHome";

export default function OrganisationPage() {
  const [filter, setFilter] = useState("type");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchHomeData = async () => {
    const response = await getHome();
    if (response.success) {
      console.log("dataa", response.data);
      setData(
        response.data.filter((item) => {
          return (
            item?.type[0]?.toLowerCase() == "pharmacy" ||
            item?.type[0]?.toLowerCase() == "hospital" ||
            item?.type[0]?.toLowerCase() == "insurance"
          );
        })
      );
      setLoading(false);
    }
  };

  var filteredData = data?.filter((item) => {
    switch (filter) {
      case "type":
        return item?.type[0]?.toLowerCase().includes(state.toLowerCase());
      case "name":
        return item?.name?.toLowerCase().includes(state.toLowerCase());
      case "location":
        return item?.location?.toLowerCase().includes(state.toLowerCase());
    }
  });

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO title={"Organisations"} />
          <Header />
          <Search
            state={state}
            setState={setState}
            filter={filter}
            setFilter={setFilter}
          />
          <OrgCardsFlex userArr={filteredData} />
        </>
      )}
    </>
  );
}
