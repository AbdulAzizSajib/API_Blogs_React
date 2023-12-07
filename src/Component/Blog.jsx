// import React from 'react';
import { MdBookmarkAdd } from "react-icons/md";

import propTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleAddTime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="w-5/6">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 m-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2 className="text-xl font-bold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <h1>{reading_time} min read </h1>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl text-green-700 ml-3"
          >
            <MdBookmarkAdd />
          </button>
        </div>
      </div>
      <h1 className="text-4xl mb-3 font-semibold"> {title} </h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="ml-2 ">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleAddTime(reading_time)}
        className="text-purple-500 underline font-bold m-2"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: propTypes.object.isRequired,
  handleAddToBookmark: propTypes.func,
  handleAddTime: propTypes.number,
};
export default Blog;
