import React, { useState } from 'react';
import ProfileLayout from '../components/Layout/ProfileLayout';
import AddBlogForm from './AddBlogForm';
import PostFormCard from '../components/PostFormCard';

const blogPosts = [
  {
    id: 1,
    title: 'Introduction to Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework...',
    date: 'October 1, 2023',
    imageUrl: 'https://example.com/image2.jpg',
  },
  {
    id: 2,
    title: 'Building a React Application',
    content: 'In this tutorial, we will build a React application from scratch...',
    date: 'October 5, 2023',
    imageUrl: 'https://example.com/image2.jpg',
  },
  // Add more blog posts here
];

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <ProfileLayout>

        <PostFormCard/>        
      <div className=" min-h-screen py-8 w-f">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-4">Latest Blogs</h1>
          <div className="grid grid-cols-1 m-5 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300 flex"
                onClick={() => openModal(post)}
              >
                <div>
                <img src={post.imageUrl} alt={post.title} className="w-1/2 h-40 object-cover mb-2 rounded-t-lg" />
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-12 m-5 rounded-lg shadow-lg z-10">
            <h2 className="text-2xl font-semibold mb-2">{selectedPost?.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPost?.content}</p>
            <p className="text-gray-400 text-sm">{selectedPost?.date}</p>
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default BlogPage;
