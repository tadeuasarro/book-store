/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksDetail extends Component {
  render(){
    return(
      this.props.data.map( book => {
        return (
        <Book key={book.id} id={book.id} title={book.title} category={book.category}/>
        )
      })
    )
  }

}

function mapStateToProps(state) {
  return ({
    data: state.data,
  });
}

export default connect(mapStateToProps)(BooksDetail);
