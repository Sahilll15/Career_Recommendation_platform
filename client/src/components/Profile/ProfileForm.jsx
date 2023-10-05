import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";



const ProfileForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (


    <div>
      <div className="flex justify-center mt-5">
        <div className="inline-flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Personality Assessment
          </button>
          <NavLink to="/quiz">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Interest Assesment test
          </button>
          </NavLink>
          <NavLink to="/quiz">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Aptitude Test
          </button>
          </NavLink>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-container bg-gray-300 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Assessment Form</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={closeModal}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.293 6.293a1 1 0 011.414 0L9 7.586l1.293-1.293a1 1 0 111.414 1.414L10.414 9l1.293 1.293a1 1 0 11-1.414 1.414L9 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L7.586 9 6.293 7.707a1 1 0 010-1.414z"></path>
                  </svg>
                </div>
              </div>
              {/* Modal Body */}
              {/* ...Form Input Fields Here... */}
              <form class="max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow-lg">
                <div class="mb-6">
                  <label
                    for="logic"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    How much do you rely on logic and reason in
                    Self-Confidence?
                  </label>
                  <select id="logic" class="form-select" >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="mb-6">
                  <label
                    for="stress"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Rate yourself on how well you handle stress or challenging
                    situations:
                  </label>
                  <select id="stress" class="form-select">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="mb-6">
                  <label
                    for="social"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    On a scale of 1 to 5, how comfortable are you in large
                    social gatherings?
                  </label>
                  <select id="social" class="form-select">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                
            
                <button className="border border-black rounded-lg bg-blue-900 p-2 text-white" onClick={()=>{
                  toast.success("Assessment Submitted Successfully")
                  closeModal()
                }}>
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ProfileForm;
