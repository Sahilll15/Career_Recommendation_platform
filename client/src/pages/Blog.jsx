import React, { useEffect, useState } from 'react';
import ProfileLayout from '../components/Layout/ProfileLayout';
import PostFormCard from '../components/PostFormCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/posts/postActions';

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const posts = useSelector((state) => state.posts.posts.products)
  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  const formatDateTime = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return new Date(date).toLocaleDateString(undefined, options);
  };
  



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <ProfileLayout>
      <PostFormCard />
      <div className=" min-h-screen py-8 w-f">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-4">Latest Blogs</h1>
          <div className="grid grid-cols-1 m-5 gap-4">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300 flex-col"
                onClick={() => openModal(post)}
              >

                <div>
                  <h2 className="text-lg font-semibold mb-2">{post.content}</h2>
                  <p className="text-gray-600 text-sm">{formatDateTime(post?.createdAt)}</p>
                </div>
                <img src={post?.media} alt="Post media" className="w-96 rounded-lg mb-4" />
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
