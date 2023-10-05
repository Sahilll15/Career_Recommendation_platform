import React from 'react';
import IMG from '../images/lap.png'


const ArticleComponent = ({ articles }) => {
    return (
        <div>

            <div>
                <section className="p-4 min-h-screen" id="jobs">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold">COURSES RECOMMENDED FOR YOU</h1>
                        <img src={IMG} alt="" className="mr-4 w-40" />
                    </div>
                    <br />
                    <div className="container mx-auto">
                        {articles.map((course) => (
                            <div key={course.id} className="mb-4">
                                <div className="bg-white rounded-lg shadow p-4 relative">
                                    <h2 className="text-xl font-bold mb-2 text-indigo-700">{course.relatedCourses[0].name}</h2>
                                    <p className="text-gray-600 mb-2">{course.relatedCourses[0].description}</p>
                                    <p className="text-gray-600 mb-2 text-blue-600">Average Salary: ${course.relatedJobs[0].avgSalary.toLocaleString()}</p>
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

        </div>
    );
};

export default ArticleComponent;
