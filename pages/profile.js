import React, { useEffect } from "react";
import DashboardHeader from "../components/common/DashboardHeader";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/user";

function ProfilePage() {
  const access_token = useSelector((state) => state.auth.access_token);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (access_token) {
      dispatch(getUser(access_token));
    }
    if (user) {
      console.log(user);
    }
  }, [access_token, dispatch, user]);

  return (
    <>
      {user ? (
        <div>
          <SEO title={"Your Profile"} />
          <DashboardHeader />
          <ProfileTop />
          <ProfileDocs />
          <CreateDoc />
        </div>
      ) : null}
    </>
  );
}

export default ProfilePage;
