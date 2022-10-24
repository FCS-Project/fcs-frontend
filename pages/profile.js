import React from "react";
import DashboardHeader from "../components/common/DashboardHeader";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";

function ProfilePage() {
  return (
    <div>
      <DashboardHeader />
      <ProfileTop />
      <ProfileDocs />
    </div>
  );
}

export default ProfilePage;
