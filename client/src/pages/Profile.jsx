import React from "react";
import ProfileForm from "../components/Profile/ProfileForm";
import PrsonalDetail from "../components/Profile/PersonalDetails";
import PersonalDetails from "../components/Profile/PersonalDetails";
import ProfileLayout from "../components/Layout/ProfileLayout";
import PersonalResult from "../components/Profile/PersonalResult";

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileForm />
      <div className=" ">
        <div className="flex flex-col  md:flex-row ">
          <div className="md:flex-1 mx-1 my-1 ">
            <PersonalDetails />
          </div>

          <div className="md:flex-1 mt-5  mx-1 my-1">
            <PersonalResult />
          </div>
        </div>

        
      </div>
      <br/><br/><br/>
    </ProfileLayout>
  );
};

export default Profile;
