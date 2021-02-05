const CategoryFilter = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select>
      <option>Select:</option>
      {CATEGORIES.map(category => (
        <option key={category}>
          {category}
        </option>
      ))}
    </select>

  );
};

export default CategoryFilter;
