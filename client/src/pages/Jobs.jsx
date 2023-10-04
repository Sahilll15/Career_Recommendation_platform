import React, { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import axios from 'axios';
import Loader from '../components/Loader';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: 'web developer',
                page: '1',
                num_pages: '1'
            },
            headers: {
                'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setJobs(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        // fetchJobs();
    }, []);

    useEffect(() => {

        console.log('jobs', jobs);
    }, [jobs]);

    if (jobs?.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center h-screen ">
                <Loader />
            </div>
        )

    }

    return (
        <MainLayout>
            <h1 className='text-center mt-10 text-4xl'>Suggested jobs</h1>
            <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {Array.isArray(jobs) &&
                    jobs?.map((job, index) => (
                        <div
                            key={index}
                            className="bg-blue-100 rounded-lg shadow-lg p-4" // Removed width classes
                        >
                            <h1 className="text-2xl font-semibold text-blue-600 mb-2">
                                {job.job_title}
                            </h1>
                            <p className="text-gray-700">{job.company_name}</p>
                            <p className="text-gray-700">{job.employer_name}</p>
                            <p className="text-blue-500 hover:underline">
                                <a
                                    href={job.employer_website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {job.employer_website}
                                </a>
                            </p>
                            <a
                                className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 inline-block mt-2 transition-colors duration-300 ease-in-out"
                                href={job.job_apply_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
            </div>
        </MainLayout>


    );
};

export default Jobs;
