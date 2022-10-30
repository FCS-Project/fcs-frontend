/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ProfileInfo from "../../components/profile/ProfileInfo";
import InfoBox from "../../components/profile/InfoBox";
import { getProfile } from "../../utils/user/getProfile";
import { useRouter } from "next/router";
import Loader from "../../components/common/Loader";
import SEO from "../../components/common/SEO";
import Header from "../../components/common/Header";
import { useSelector } from "react-redux";
import Button from "../../components/common/Button";
import { deleteUser } from "../../utils/user/deleteUser";
import CreateDoc from "../../components/profile/createDoc";

function User() {
  const userRole = useSelector((state) => state.user?.data?.roles[0]);
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchProfile = async (id) => {
    getProfile(id)
      .then((response) => {
        if (response?.success) {
          setUser(response.data);
          setLoading(false);
        }
      })
      .then((error) => {
        setError(error);
      });
  };

  const delUser = async (id) => {
    deleteUser(id)
      .then((response) => {
        if (response.success) {
          router.push("/");
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  const [document, setDocument] = useState(false);

  useEffect(() => {
    fetchProfile(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO title={user.name} />
          <Header />
          <div className="gap-5 ml-auto mr-auto flex flex-col justify-start w-11/12 lg:w-3/4 md:gap-8 lg:gap-10 pb-10">
            <ProfileInfo
              name={user.name}
              bannerSrc={user.bannerSrc}
              displaySrc={user.displaySrc}
              type={user.type}
            />
            {user.description && <InfoBox description={user.description} />}
            {user.location && <InfoBox location={user.location} />}
            {user.email && <InfoBox email={user.email} />}
            {user.mobileNumber && <InfoBox mobileNumber={user.mobileNumber} />}
            {userRole === "Admin" && (
              <div className="text-right my-2 p-2" onClick={() => delUser(id)}>
                <Button text={"Remove"} type="tertiary" />
              </div>
            )}
          </div>
          <CreateDoc shareId={user.id} />
          {error}
        </>
      )}
    </>
  );
}

export default User;
