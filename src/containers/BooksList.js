/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends Component {
  render() {
    const bookArr = Object.values(this.props.books.books);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
            </tr>

            {bookArr.map(book => (
              <Book key={book.id} id={book.id} title={book.title} category={book.category} />
            ))}

          </tbody>
        </table>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books,
  });
}

export default connect(mapStateToProps)(BooksList);
