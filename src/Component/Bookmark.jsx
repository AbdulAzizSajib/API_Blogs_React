import propTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-sky-300 p-4 mr-4 mb-4 rounded-lg">
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: propTypes.array,
};
export default Bookmark;
