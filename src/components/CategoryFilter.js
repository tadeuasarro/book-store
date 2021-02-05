import PropTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select onChange={filter}>
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
