import propTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-5/6">
      <div>
        <h3 className="text-2xl font-bold p-4 ">
          Reading Time : {readingTime}
        </h3>
      </div>
      <h1>Number of Bookmarks:{bookmarks.length} </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: propTypes.array,
  readingTime: propTypes.number,
};
export default Bookmarks;
