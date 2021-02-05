import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { deleteBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const bookArr = Object.values(this.props.books.books); // eslint-disable-line
    return (
      <div>
        {bookArr.map(book => { // eslint-disable-line
          const { id, title, category } = book;
          return (
            <Book
              key={id}
              id={id}
              title={title}
              category={category}
              handleRemoveBook={this.handleRemoveBook}
            />
          );
        })}
        <CategoryFilter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.object),
  }),
};

BooksList.defaultProps = {
  books: [{}],
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(deleteBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
