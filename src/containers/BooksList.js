import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { filterBook, deleteBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.selectFilteredBooks = this.selectFilteredBooks.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    changeFilter(event);
  }

  async selectFilteredBooks() {
    const { filter } = this.props;
    const books = await this.props.books.books; // eslint-disable-line
    if (filter === 'All') {
      return books;
    }
    return books.filter(book => book.category === filter);
  }

  async render() {
    const filteredBooks = await this.selectFilteredBooks();
    console.log(filteredBooks);
    return (
      <div className="cards-container d-flex flex-column a-items-center j-c-center">
        <div className="w-full d-flex j-c-start font-montserrat a-items-center">
          <h3 className="filter-title text uppercase">Filter Books</h3>
          <CategoryFilter filter={this.handleFilterChange} />
        </div>
          {filteredBooks.map(book => { // eslint-disable-line
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
        <hr className="w-full thin-grey-border" />
      </div>
    );
  }
}

BooksList.propTypes = {
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  books: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.object),
  }),
};

BooksList.defaultProps = {
  books: [{}],
};

function mapStateToProps(state) {
  console.log(state);
  return ({
    books: state.books,
    filter: state.filter,
  });
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(deleteBook(id)),
  changeFilter: filter => dispatch(filterBook(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
