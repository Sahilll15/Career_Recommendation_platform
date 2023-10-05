import React, { useEffect, useState } from 'react';
import Card from './Card';



export default function PostFormCard() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [imageAddmodel, setImageAddmodel] = useState(false);


  

  

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(getLoggedInUser());
  //   }
  // }, [dispatch, user])

  return (
    <Card noPadding={false}>
      <form  className="w-full">
        <div className="my-4">
          <textarea
            id="content"
            name="content"
            // value={content}
            // onChange={handleChange}
            className="w-full p-4 border h-14 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image upload input */}
        {imageAddmodel && (
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Add a Photo / Video
            </label>
            <input
              type="file"
              id="media"
              name="media"
              accept="image/*, video/*" // Updated accept attribute
            //   onChange={handleMediaUpload}
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        {/* Toggle image upload */}
        <div className="mb-4 flex justify-between items-center ">
          <div className="flex items-center cursor-pointer border-2 border-slate-200 hover:bg-gray-100" onClick={() => setImageAddmodel(!imageAddmodel)}>
            {/* <FontAwesomeIcon icon={faImage} className="text-gray-500 text-base" /> */}
            <span className="text-gray-700 text-lg ml-2 ">Attach Photo/Video  &nbsp;</span>
          </div>
        </div>


        <div className="text-right">
          <button
            class="group w-24 h-8 ml-2 relative z-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner"

            type='submit'
          >
            <div class="absolute -z-10 -inset-0.5  rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
            <div class="svg-wrapper transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class=""
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fff"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
            <span class="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
              POST
            </span>
          </button>


        </div>
      </form>
    </Card>
  );
}
