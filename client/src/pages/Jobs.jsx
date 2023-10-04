import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/ProfileLayout";
import axios from "axios";
import Loader from "../components/Loader";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: "web developer",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": "03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
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
    fetchJobs();
  }, []);

  useEffect(() => {
    console.log("jobs", jobs);
  }, [jobs]);

  if (jobs?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen ">
        <Loader />
      </div>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-center mt-10 text-4xl">Suggested jobs</h1>
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  {Array.isArray(jobs) &&
    jobs?.map((job, index) => (
      <div
        className="w-full mx-auto bg-white rounded-md shadow-lg p-6 space-y-4"
        key={index}
      >
        {job.employer_logo ? (
          <img src={job.employer_logo} alt="" className="h-16 max-w-full" />
        ) : (
          <div className="h-16"></div> // Placeholder for image if not present
        )}

        <h1 className="text-xl font-bold">{job.job_title}</h1>

        <p className="text-gray-700">{job.employer_company_type}</p>
        <p className="text-gray-700">{job.employer_name}</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    ))}
</div>


    </MainLayout>
  );
};

export default Jobs;
