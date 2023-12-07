import "./App.css";
import Header from "./Component/Header";
import Blogs from "./Component/Blogs";
import Bookmarks from "./Component/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  // For Settime Feature
  const [readingTime, setReadingTime] = useState(0);

  const handleAddTime = (time) => {
    console.log("mark as Read", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="flex justify-between mt-5 p-5 rounded-lg bg-fuchsia-50">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
