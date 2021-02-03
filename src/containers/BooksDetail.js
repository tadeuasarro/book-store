/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksDetail extends Component {
  render(){
    return(
      <div>{this.props.books}</div>
    )
  }

}

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

export default connect(mapStateToProps)(BooksDetail);
