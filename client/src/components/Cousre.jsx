import React from "react";
import ProfileLayout from "./Layout/ProfileLayout";
import IMG from "../images/lap.png";

const coursesData = [
  {
    id: 1,
    companyName: "Company X",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    companyName: "Company Y",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    companyName: "Company Y",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    companyName: "Company Y",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    companyName: "Company Y",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more data objects here
];

const Course = () => {
  return (
    <ProfileLayout>
      <div>
  <section className="p-4 min-h-screen" id="jobs">
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold">COURSES RECOMMENDED FOR YOU</h1>
      <img src={IMG} alt="" className="mr-4 w-40" />
    </div>
    <br />
    <div className="container mx-auto">
      {coursesData.map((course) => (
        <div key={course.id} className="mb-4">
          <div className="bg-white rounded-lg shadow p-4 relative">
            <h2 className="text-xl font-bold mb-2">{course.articleName}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-gray-600 mb-2">Company Name: {course.companyName}</p>
            <p className="text-gray-600 mb-2">Average Salary: {course.avgSalary}</p>
            <div className="bg-blue-600 w-fit mt-2 rounded-lg">
              <a href={course.url} className="text-white p-2 block m-1">
                View Course
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

    </ProfileLayout>
  );
};

export default Course;
