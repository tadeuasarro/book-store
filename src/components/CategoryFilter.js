import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={filter}>
      <option>All:</option>
      {CATEGORIES.map(category => (
        <option key={category}>
          {category}
        </option>
      ))}
    </select>

  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
