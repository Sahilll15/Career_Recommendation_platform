import React, { useEffect, useState } from 'react';
import '../css/Suggestion.css'; 
import { getCategory } from '../redux/Category/CategoryActions';
import { useSelector, useDispatch } from 'react-redux';


const Suggestion = () => {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imgSrc) => {
    setSelectedImages(prevSelected => prevSelected.includes(imgSrc) 
      ? prevSelected.filter(item => item !== imgSrc) 
      : [...prevSelected, imgSrc]
    );
  };

  
  const Category=useSelector((state)=>state.category.category)

  // Define an array of image sources
  const imageSources = [
    require('../images/Components/1.png'),
    require('../images/Components/2.png'),
    require('../images/Components/3.png'),
    require('../images/Components/4.png'),
    require('../images/Components/5.png'),
    require('../images/Components/6.png'),
    
  ];

  useEffect(()=>{
    dispatch(getCategory());
    console.log('first'+Category)
  },[])

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <button>Submit</button>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {!Category ? <div>loading</div> : Category.map((category,index)=>(
          <div 
            key={index} 
            className="my-1 px-1 max:w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
          >
            <article 
              className={`overflow-hidden rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 image-container shadow-lg shadow-black ${selectedImages.includes(category?.image) && 'selected'}`}
              onClick={() => handleImageClick(category?.image)}
            >
              <p>{category._id }</p>
              <a>
                <img alt={`Placeholder ${index+1}`} className="block h-auto w-full" src={category?.image} />
              </a>
            </article>
          </div>
        ))}
        {/* {imageSources.map((src, index) => (
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
          
        ))} */}
      </div>
    </div>
  );
}

export default Suggestion;
