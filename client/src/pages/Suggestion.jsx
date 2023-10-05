import React, { useEffect, useState } from 'react';
import '../css/Suggestion.css'; 
import { getCategory } from '../redux/Category/CategoryActions';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'


const Suggestion = () => {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);
  const [limitedCategories, setLimitedCategories] = useState([]);

  const handleImageClick = (imgSrc) => {
    setSelectedImages(prevSelected => prevSelected.includes(imgSrc) 
      ? prevSelected.filter(item => item !== imgSrc) 
      : [...prevSelected, imgSrc]
    );
  };

  const Category = useSelector((state)=>state.category.category);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    if (Category) {
      setLimitedCategories(Category.slice(0, 5)); // Only first 5 categories
    }
  }, [Category]);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
     
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {!limitedCategories ? <div>loading</div> : limitedCategories.map((category, index) => (
          <div 
            key={index} 
            className="my-1 px-1 max:w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
          >
            <article 
              className={`overflow-hidden rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 image-container shadow-lg shadow-black ${selectedImages.includes(category?.imageUrl) && 'selected'}`}
              onClick={() => handleImageClick(category?._id)}
            >
              <a>
                <img alt={`Placeholder ${index + 1} className="block h-auto w-full"  `} src={category.imageUrl}/>
              </a>
            </article>
          </div>
        ))}
      </div>
      <NavLink to="/">
        
      <button className='bg-blue-600 rounded-lg text-white px-4'>Submit</button>
      </NavLink>
    </div>
  );
}

export default Suggestion;
