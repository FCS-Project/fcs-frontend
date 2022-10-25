import React from "react";
import DashboardHeader from "../components/common/DashboardHeader";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";

function ProfilePage() {
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
