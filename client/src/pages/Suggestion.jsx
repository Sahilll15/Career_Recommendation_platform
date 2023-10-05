import React, { useState } from 'react';
import '../css/Suggestion.css'; // Assuming you have a CSS file for styling

const Suggestion = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imgSrc) => {
    setSelectedImages(prevSelected => prevSelected.includes(imgSrc) 
      ? prevSelected.filter(item => item !== imgSrc) 
      : [...prevSelected, imgSrc]
    );
  };

  

  // Define an array of image sources
  const imageSources = [
    require('../images/Components/1.png'),
    require('../images/Components/2.png'),
    require('../images/Components/3.png'),
    require('../images/Components/4.png'),
    require('../images/Components/5.png'),
    require('../images/Components/6.png'),
    
  ];

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <button>Submit</button>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {imageSources.map((src, index) => (
          <div 
            key={index} 
            className="my-1 px-1 max:w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
          >
            <article 
              className={`overflow-hidden rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 image-container shadow-lg shadow-black ${selectedImages.includes(src) && 'selected'}`}
              onClick={() => handleImageClick(src)}
            >
              <a>
                <img alt={`Placeholder ${index+1}`} className="block h-auto w-full" src={src} />
              </a>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestion;
