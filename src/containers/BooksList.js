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
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    changeFilter(event);
  }

  render() {
    const bookArr = Object.values(this.props.books.books); // eslint-disable-line
    return (
      <div>
        <table>
          <tbody>
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
          </tbody>
        </table>
        <CategoryFilter filter={this.handleFilterChange} />
      </div>
    );
  }
}

BooksList.propTypes = {
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
