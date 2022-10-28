import React, { useEffect } from "react";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/user";
import Header from "../components/common/Header";

function ProfilePage() {
  const access_token = useSelector((state) => state.auth.access_token);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (access_token) {
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <SEO title={user.name} />
          <Header />
          <ProfileTop
            name={user.name}
            displaySrc={user.displaySrc}
            type={user.type}
          />
          <ProfileDocs documents={user.documents} />
          <CreateDoc />
        </>
      ) : null}
    </>
  );
}

export default ProfilePage;
