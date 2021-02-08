import PropTypes from 'prop-types';

const Book = props => {
  const {
    id,
    title,
    category,
    handleRemoveBook,
  } = props;
  return (
    <div className="card w-full d-flex j-c-space-between bg-white thin-grey-border">
      <div className="info d-flex flex-column font-roboto">
        <div>
          <p className="details-category font-montserrat text-bold">{category}</p>
          <h3 className="details-title text-bold">{title}</h3>
          <p className="details-author text-light">Author</p>
        </div>
        <div className="action-container">
          <button className="action-btn text-light" type="button">Comments</button>
          <button className="action-btn action-btn-remove text-light" onClick={() => handleRemoveBook(id)} type="button">Remove</button>
          <button className="action-btn text-light" type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress d-flex">
        <div className="d-flex a-items-center font-montserrat">
          <div className="progress-circle" />
          <div className="d-flex flex-column a-items-center j-c-center">
            <p className="progress-percentage margin-0">
              0%
            </p>
            <p className="progress-text font-montserrat">
              Completed
            </p>
          </div>
        </div>
        <div className="v-line" />
        <div className="font-roboto">
          <p className="chapter-progress-title text-uppercase text-light">Current Chapter</p>
          <p className="chapter-progress-name">Chapter X</p>
          <button className="chapter-progress-btn font-roboto text-uppercase bg-blue text-white text-light" type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
