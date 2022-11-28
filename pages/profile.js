/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { getUser } from "../store/actions/user";
import { getUserDocuments } from "../utils/document/getUserDocuments";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserDocs = async () => {
    getUserDocuments().then((response) => {
      if (response.success) {
        setDocs(response.data.documents);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (auth?.access_token) {
      fetchUserDocs();
    }
  }, []);

  useEffect(() => {
    if (!auth.access_token) {
      router.push("/login");
    } else {
      dispatch(getUser());
    }
  }, [auth]);

  if (auth?.loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      {user && (
        <>
          <SEO title={user.name} />
          <Header />
          <ProfileTop
            name={user.name}
            displaySrc={user.displaySrc}
            type={user.type}
            email={user.email}
          />
          <ProfileDocs documents={docs} loading={loading} />
        </>
      )}
    </>
  );
}

export default ProfilePage;
