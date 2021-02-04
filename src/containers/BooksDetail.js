import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BooksDetail extends Component {
  render() {
    return (
      this.props.data.map(book => { // eslint-disable-line
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
    data: state.data,
  });
}

BooksDetail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

BooksDetail.defaultProps = {
  data: [{}],
};

export default connect(mapStateToProps)(BooksDetail);
