import React, { useState } from "react";

const ResumeEditor = () => {

  return (
    <div className="">
      <form>
        <div className="">
          <div className="border-b border-gray-900/10 mb-2">
            <h2 className="text-base font-semibold leading-7 text-white">
              FILL OUR ALL DETAILS AND GET YOUR RESUME READY
            </h2>
          </div>

          <div className="border-b border-gray-900/10">
            <h2 className="text-base font-semibold leading-7 text-white">
              Personal Information
            </h2>
            <div className=" mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium  text-white"
                >
                  Full Name
                </label>
                <div className="">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium  text-white"
                >
                  Mobile number
                </label>
                <div className="">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium  text-white"
                >
                  Email
                </label>
                <div className="">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium  text-white"
                >
                  LinkedIn url
                </label>
                <div className="">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm mt-2 font-medium leading-6 text-white"
            >
              About
            </label>
            <p className=" text-sm text-white">
              Write a few sentences about yourself.
            </p>
            <div className="">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-balck shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="border-b border-gray-900/10 mt-6">
          <h2 className="text-base font-semibold leading-7 text-white">
            EDUCATION
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white"
              >
                10TH MARKS
              </label>
              <div className="">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                12TH MARKS
              </label>
              <div className="">
                <input
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="role"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                CURRENT AVEGARAGE MARKS
              </label>
              <div className="">
                <input
                  type="text"
                  name="year"
                  id="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>


          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm mt-2 font-medium leading-6 text-white"
            >
              Skills (Seperate with comma)
            </label>
            <div className="">
              <textarea
                id="about"
                name="about"
                rows={1}
                className="block w-full rounded-md border-0 py-1.5 text-balck shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>


        <div className="border-b border-gray-900/10 mt-6">
          <h2 className="text-base font-semibold leading-7 text-white">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white"
              >
                Company Name
              </label>
              <div className="">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                Role
              </label>
              <div className="">
                <input
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="role"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                Year
              </label>
              <div className="">
                <input
                  type="text"
                  name="year"
                  id="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 mt-6">
          <h2 className="text-base font-semibold leading-7 text-white">
            Project
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white"
              >
                Project Name
              </label>
              <div className="">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                About
              </label>
              <div className="">
                <input
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="role"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                Github Link
              </label>
              <div className="">
                <input
                  type="text"
                  name="year"
                  id="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 mt-6">
          <h2 className="text-base font-semibold leading-7 text-white">
            Awards
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white"
              >
                Position
              </label>
              <div className="">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                Competition name
              </label>
              <div className="">
                <input
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="role"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-white"
              >
                Place/ institute name
              </label>
              <div className="">
                <input
                  type="text"
                  name="year"
                  id="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>



        <div className=" flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-red-500 border-2 border-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeEditor;
