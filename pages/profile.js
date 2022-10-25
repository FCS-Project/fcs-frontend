import React from "react";
import DashboardHeader from "../components/common/DashboardHeader";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";

function ProfilePage() {
  return (
    <div>
      <DashboardHeader />
      <ProfileTop />
      <ProfileDocs />
      <CreateDoc />
    </div>
  );
}

export default ProfilePage;
