import React, { useState } from 'react';

const ResumeBuilder = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        date1: '',
        date2: '',
        education2: '',
        workExperience: '',
        skills: '',
        projects: '',
        portfolioLinks: '',
        achievements: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        console.log(formData);
    };

    return (
        <div className="containe  mx-80 my-10 p-4 border border-solid border-gray-900 ">
            <h1 className="text-3xl font-bold mb-4 text-center">Resume Builder</h1>
            <div id="personalInfoSection">
                <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-bold mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder='Your Full Name'
                                id="fullName"
                                name="fullName"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder='Your email'
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-bold mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder='Your phone number'
                            name="phone"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-bold mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder='Your address'
                            name="address"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="education" className="block text-sm font-bold mb-2">
                            Education
                        </label>
                        <input
                            type="text"
                            id="education"
                            name="education"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Education1  .."
                            onChange={onChange}
                        />
                    </div>
                    {/* year of passing */}
                    <div className='mb-4'>
                        <label htmlFor="" className='font-bold mr-6'>Year of Completion</label>
                        <input type="date" name="date1" id="" onChange={onChange} className='border border-black p-1 rounded-xl ' />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            id="education2"
                            name="education2"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Education2 .."
                            onChange={onChange}
                        />
                    </div>
                    {/* year of passing */}
                    <div className='mb-4'>
                        <label htmlFor="" className='font-bold mr-6'>Year of Completion</label>
                        <input type="date" name="date2" id="" onChange={onChange} className='border border-black p-1 rounded-xl ' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="workExperience" className="block text-sm font-bold mb-2">
                            Work Experience
                        </label>
                        <textarea
                            id="workExperience"
                            name="workExperience"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            rows="4"
                            placeholder="Your Work Experience.."
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="skills" className="block text-sm font-bold mb-2">
                            Skills
                        </label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder='Skills'
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="projects" className="block text-sm font-bold mb-2">
                            Projects
                        </label>
                        <input
                            type="text"
                            id="projects"
                            name="projects"
                            placeholder='Your Projects..'
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="portfolioLinks" className="block text-sm font-bold mb-2">
                            Portfolio Links
                        </label>
                        <input
                            type="text"
                            id="portfolioLinks"
                            name="portfolioLinks"
                            placeholder="https://github.com/Sahilll15"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="achievements" className="block text-sm font-bold mb-2">
                            Achievements
                        </label>
                        <input
                            type="text"
                            id="achievements"
                            name="achievements"
                            placeholder="Your Achievements.."
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={onChange}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create a resume
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ResumeBuilder;