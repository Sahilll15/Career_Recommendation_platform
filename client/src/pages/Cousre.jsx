import React from 'react';
import ProfileLayout from '../components/Layout/ProfileLayout';

const coursesData = [
  {
    id: 1,
    companyName: 'Company X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    companyName: 'Company Y',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    companyName: 'Company Y',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    companyName: 'Company Y',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    companyName: 'Company Y',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more data objects here
];

const Course = () => {
  return (
    <ProfileLayout>
      <div>
        <section className="p-4 min-h-screen" id="jobs">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {coursesData.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow p-4 relative h-[225px]">
                <h2 className="text-xl font-bold mb-2">{course.companyName}</h2>
                <p className="text-gray-600 mb-8">{course.description}</p>
                <div className="bg-blue-600 w-fit mt-2 rounded-lg absolute bottom-2">
                  <a href="#" className="text-white p-2 block m-1">
                    View Course
                  </a>
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
