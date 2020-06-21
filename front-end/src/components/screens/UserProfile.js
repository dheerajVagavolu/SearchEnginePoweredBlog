import React from "react";
import Header from "../parts/Header";
import BasicInfo from "../parts/BasicInfo";
import Stats from "../parts/Stats";
import GeneralDetails from "../parts/GeneralDetails";

const UserProfile = () => {
  return (
    <>
      <Header />
      <BasicInfo />
      <Stats />
      <GeneralDetails />
    </>
  );
};

export default UserProfile;
