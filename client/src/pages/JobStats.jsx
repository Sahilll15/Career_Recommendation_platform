import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import MainLayout from '../components/Layout/MainLayout';

const JobStats = () => {
    const [salaryData, setSalaryData] = useState([]);

    const newSalaryData = [
        {
            "location": "New York, NY",
            "job_title": "Node Js Developer",
            "publisher_name": "ZipRecruiter",
            "publisher_link": "https://www.ziprecruiter.com/Salaries/Node-JS-Developer-Salary--in-New-York",
            "min_salary": 107431,
            "max_salary": 184490,
            "median_salary": 139508,
            "salary_period": "YEAR",
            "salary_currency": "USD"
        },
        {
            "location": "New York, NY",
            "job_title": "Node.js Developer",
            "publisher_name": "Salary.com",
            "publisher_link": "https://www.salary.com/research/company/smartyads-inc/node-js-developer-salary?cjid=15612620",
            "min_salary": 94260.2257583,
            "max_salary": 121697.3915136,
            "median_salary": 110149.31626302,
            "salary_period": "YEAR",
            "salary_currency": "USD"
        },
        {
            "location": "New York, NY",
            "job_title": "node js developer",
            "publisher_name": "Talent.com",
            "publisher_link": "https://www.talent.com/salary?job=node+js+developer&location=new+york",
            "min_salary": 84947.5,
            "max_salary": 173350,
            "median_salary": 130000,
            "salary_period": "YEAR",
            "salary_currency": "USD"
        }
    ];

    const fetchJobStats = async () => {
        const options = {
            method: 'GET',
            url: 'https://job-salary-data.p.rapidapi.com/job-salary',
            params: {
                job_title: 'nodejs developer',
                location: 'new york, usa',
                radius: '200'
            },
            headers: {
                'X-RapidAPI-Key': '6125ea9fc1msh791e843d7b52a62p139651jsn7fa2612559ef',
                'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            setSalaryData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // fetchJobStats();
    }, []);

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="w-full mx-auto bg-white rounded-md shadow-lg p-6 space-y-4">

                    {newSalaryData.map((salary) => {
                        return (
                            <div key={salary.job_title}>
                                <h1>{salary.job_title}</h1>
                                <h1>{salary.location}</h1>
                                <h1>{salary.max_salary}</h1>
                                <h1>{salary.min_salary}</h1>
                                <h1>{salary.median_salary}</h1>
                                <h1>{salary.salary_currency}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </MainLayout>
    );
};

export default JobStats;
