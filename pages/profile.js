/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/user";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { useRouter } from "next/router";
import { getAccessToken } from "../lib/auth";

function ProfilePage() {
  const router = useRouter();
  const access_token = useSelector((state) => state.auth.access_token);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (access_token) {
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      <SEO title={"Profile"} />
      {user ? (
        <>
          <SEO title={user.name} />
          <Header />
          <ProfileTop
            name={user.name}
            displaySrc={user.displaySrc}
            type={user.type}
            email={user.email}
          />
          <ProfileDocs documents={user.documents} />
          <CreateDoc />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProfilePage;
