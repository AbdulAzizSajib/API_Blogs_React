import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Component/Blog";

const Blogs = ({ handleAddToBookmark, handleAddTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h2>Number of Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blogs.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleAddTime={handleAddTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: propTypes.array,
  handleAddTime: propTypes.number,
};
export default Blogs;
