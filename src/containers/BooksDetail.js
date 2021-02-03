/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksDetail extends Component {
  render(){
    return(
      
      this.props.books.map( book => {
        return (
        <tr>
          <td>
          {book.id}
          </td>
        </tr>
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
