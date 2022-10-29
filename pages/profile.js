/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";

function ProfilePage() {
  const user = useSelector((state) => state.user.data);
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
