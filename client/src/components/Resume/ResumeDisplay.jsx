import React from "react";

const ResumeDisplay = () => {
  return (
    <div className="mt-5">
      <div>
        <p className="text-center font-bold justify-center">Aditya Shah</p>
        <div className="flex justify-center items-center mt-2">
          <p className="mr-4">+91 0123456789</p>
          <p className="mr-4">abc@gmail.com</p>
          <p>LinkedIn url</p>
        </div>

        <div>
          <p className="font-medium mt-6 ">About me</p>
          <hr />
          <p>Some thing that no gives fuck</p>
        </div>

        <div>
          <p className="font-medium mt-6 ">Education</p>
          <hr />
          <p>10th std</p>
          <p>12th std</p>
          <p> Chosen Field std</p>
        </div>

        <div>
          <p className="font-medium mt-6 ">INTERNSHIP</p>
          <hr />
          <p>Comany name ______________ Role ___________ Year _______</p>
          <p>Comany name ______________ Role ___________ Year _______</p>
          <p>Comany name ______________ Role ___________ Year _______</p>
        </div>

        <div>
          <p className="font-medium mt-6 ">PROJECTS</p>
          <hr />
          <p>Project Name ________ <p>About project ________ Github link _____ </p> </p><br/>
          <p>Project Name ________ <p>About project ________ Github link _____ </p> </p> <br/>
          <p>Project Name ________ <p>About project ________ Github link _____ </p> </p><br/>
        </div>

        <div>
          <p className="font-medium mt-6 ">ACADEMIC AWARDS</p>
          <hr />
          <p>
            Position (1st 2nd) at competiton name hosted at place name on date{" "}
          </p>
        </div>

        <div>
          <p className="font-medium mt-6 ">SKILLS</p>
          <hr />
          <ul
            role="list"
            class="marker:text-sky-400 list-disc pl-5 space-y-1 text-slate-400"
          >
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeDisplay;
