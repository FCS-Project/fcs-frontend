/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import SEO from "../components/common/SEO";
import Document from "../components/document/Document";
import Loader from "../components/common/Loader";
import { getSharedDocuments } from "../utils/document/getSharedDocuments";
import DocFlex from "../components/document/DocumentFlex";
import DocumentFlex from "../components/document/DocumentFlex";

export default function OrganisationPage() {
  const shared = true;
  const [filter, setFilter] = useState(shared ? "name" : "type");
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
      case "name":
        return item?.user?.name?.toLowerCase().includes(state.toLowerCase());
      case "document name":
        return item?.name?.toLowerCase().includes(state.toLowerCase());
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
            document={shared}
          />
          {data ? (
            <DocumentFlex documents={filteredData} shared={shared} />
          ) : (
            <div>No documents have been shared with you hahaha loner</div>
          )}
        </>
      )}
    </>
  );
}
