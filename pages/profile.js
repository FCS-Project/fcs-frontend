import React from "react";
import DashboardHeader from "../components/common/DashboardHeader";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {
  const user = useSelector((state) => state.user.access_token);

  return (
    <>
      <SEO title={"Your Profile"} />
      <DashboardHeader />
      <ProfileTop />
      <ProfileDocs />
      <CreateDoc />
    </>
  );
}

export default ProfilePage;
