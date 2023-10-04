import React, { useState } from 'react';

import img1 from '../images/Components/1.png';
// ... (import other images)

const Suggestion = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  }

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {/* ... (rest of your code) */}
        <div className="my-1 px-1 max:w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
          <article className="overflow-hidden rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 image-container shadow-lg shadow-black">
            <a href="#" onClick={toggleContent}>
              <img alt="Placeholder" className="block h-auto w-full" src={img1} />
              {showContent && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <span className="text-white">Your additional content here</span>
                </div>
              )}
            </a>
          </article>
        </div>
        {/* ... (rest of your code) */}
      </div>
    </div>
  )
}

export default Suggestion;
