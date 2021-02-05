import PropTypes from 'prop-types';

const Book = props => {
  const {
    id,
    title,
    category,
    handleRemoveBook,
  } = props;
  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button onClick={() => handleRemoveBook(id)} type="button">Remove book</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
