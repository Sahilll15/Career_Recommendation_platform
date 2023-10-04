import React from "react";
import ResumeEditor from "../components/Resume/ResumeEditor";
import ResumeDisplay from "../components/Resume/ResumeDisplay";

const Resume = () => {
  return (
    <div className="bg-gray-800 min-h-screen">


      <div className="flex flex-col  md:flex-row h-screen">


        <div className="md:flex-1  p-6 bg-gray-800">
          {/* Content for the left half */}
          <ResumeEditor/>
        </div>

        <div className="md:flex-1 ml-2 p-6 border-2 bg-white border-black mx-1 my-1">
          {/* Content for the right half */}
          <ResumeDisplay/>
        </div>


      </div>
    </div>
  );
};

export default Resume;
