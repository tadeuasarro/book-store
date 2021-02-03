/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksDetail extends Component {
  render(){
    return(
      
      this.props.books.map( book => {
        return (
        <Book id={book.id} title={book.title} category={book.category}/>
        )
      })
    )
  }

}

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

export default connect(mapStateToProps)(BooksDetail);
