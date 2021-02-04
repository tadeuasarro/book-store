import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BooksDetail extends Component {
  render() {
    const bookArr = Object.values(this.props.books.books); // eslint-disable-line
    return (
      bookArr.map(book => { // eslint-disable-line
        const { id, title, category } = book;
        return (
          <Book key={id} id={id} title={title} category={category} />
        );
      })
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

BooksDetail.propTypes = {
  books: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.object),
  }),
};

BooksDetail.defaultProps = {
  books: [{}],
};

export default connect(mapStateToProps)(BooksDetail);
