import React from "react";
import ProfileLayout from "./Layout/ProfileLayout";
import IMG from "../images/lap.png";

const coursesData = [
  {
    _id: '651d6d9f25d42626c0b90614',
    relatedCategory: '651d6cb010b3a8b7ef4ea3c1',
    articleName: 'Introduction to Data Science',
    description: 'Explore the world of data science and its applications.',
    interestedUsers: [],
    relatedJobs: [
      {
        name: 'Data Scientist',
        avgSalary: 80000,
        company: 'DataCorp',
        url: 'https://example.com/data-scientist-job',
        _id: '651d6d9f25d42626c0b90615'
      }
    ],
    relatedCourses: [
      {
        name: 'Data Science Fundamentals',
        url: 'https://example.com/data-science-fundamentals-course',
        description: 'Explore the world of data science and its applications in this course.',
        _id: '651d6d9f25d42626c0b90616'
      }
    ],
    trendInMarket: 'Big Data',
    tags: [
      'Data Science',
      'Analytics'
    ],
    __v: 0,
    createdAt: '2023-10-04T13:50:23.590Z',
    updatedAt: '2023-10-04T13:50:23.590Z'
  }
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
                  <h2 className="text-xl font-bold mb-2">{course.relatedCourses[0].name}</h2>
                  <p className="text-gray-600 mb-2">{course.relatedCourses[0].description}</p>
                  <p className="text-gray-600 mb-2">Company Name: {course.companyName}</p>
                  <p className="text-gray-600 mb-2">Average Salary: {course.relatedJobs[0].avgSalary}</p>
                  <div className="bg-blue-600 w-fit mt-2 rounded-lg">
                    <a href={course.relatedCourses[0].url} className="text-white p-2 block m-1">
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
