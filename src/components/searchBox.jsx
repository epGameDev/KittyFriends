import PropTypes from "prop-types";
import "../containers/app.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div id="cat-search--container">
      <input
        type="search"
        name="kitty-search"
        id="kitty-search"
        placeholder="Search Kitties"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  searchChange: PropTypes.func,
}