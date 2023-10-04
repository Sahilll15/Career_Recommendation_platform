import React, { useState } from 'react';

const AddBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add code to handle the submission of the blog post data.
    // You can send a request to your API or update the state as needed.
    // Example:
    // const newBlogPost = { title, content };
    // // Send a request to add the new blog post to your backend
    // // Update the state or perform any necessary actions

    // Reset the form fields
    setTitle('');
    setContent('');
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            className="w-full p-4 border h-14 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Add a Image/Video
          </label>
          <input
            type="file"
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            required  />
          </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Blog Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
