/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/common/DashboardHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import InfoBox from "../../components/profile/InfoBox";
import { getProfile } from "../../utils/user/getProfile";
import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchProfile = async (id) => {
    getProfile(id).then((response) => {
      if (response.success) {
        setUser(response.data);
        setLoading(false);
      }
    });
  };
  const [document, setDocument] = useState(false);

  useEffect(() => {
    fetchProfile(id);
  }, [id]);

  return (
    <>
      {loading ? (
        // put loader here from spinner package its already installed
        <>Loading....</>
      ) : (
        <div className="bg-slate-50">
          <DashboardHeader />
          <div className="gap-5 ml-auto mr-auto flex flex-col justify-start w-11/12 lg:w-3/4 md:gap-8 lg:gap-10 pb-10">
            <ProfileInfo
              name={user.name}
              bannerSrc={user.bannerSrc}
              displaySrc={user.displaySrc}
              type={user.type}
            />
            <InfoBox description={user.description} />
            <InfoBox location={user.location} />
            <InfoBox email={user.email} />
            <InfoBox mobileNumber={user.mobileNumber} />
          </div>
        </div>
      )}
    </>
  );
}

export default User;
