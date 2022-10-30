/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import CreateDoc from "../components/profile/createDoc";
import ProfileDocs from "../components/profile/ProfileDocs";
import ProfileTop from "../components/profile/ProfileTop";
import SEO from "../components/common/SEO";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import { getUser } from "../store/actions/user";
import { useRouter } from "next/router";

function ProfilePage() {
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!auth?.loading && auth?.access_token) {
      dispatch(getUser());
    }
  }, [user?.data]);

  useEffect(() => {
    if (!auth?.access_token && !user?.data) {
      router.push("/login");
    }
  }, [auth]);

  if (user?.loading || auth?.loading) {
    return (
      <>
        <SEO title={"Profile"} />
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
          <ProfileDocs documents={user.documents} />
          <CreateDoc />
        </>
      )}
    </>
  );
}

export default ProfilePage;
