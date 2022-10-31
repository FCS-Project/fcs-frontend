/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import SEO from "../components/common/SEO";
import OrgCardsFlex from "../components/organisation/OrgCardsFlex";
import Loader from "../components/common/Loader";
import { getSharedDocuments } from "../utils/document/getSharedDocuments";

export default function OrganisationPage() {
  const [filter, setFilter] = useState("type");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchSharedDocs = async () => {
    getSharedDocuments().then((response) => {
      if (response.success) {
        setData(response.data);
        setLoading(false);
      }
    });
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
    fetchSharedDocs();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO title={"Shared Documents"} />
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
