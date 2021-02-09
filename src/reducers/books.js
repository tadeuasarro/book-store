import { CREATE_BOOK, REMOVE_BOOK } from '../actions/constants';
import booksIndex from '../fetch/index';

async function booksReducer() {
  const books = await booksIndex();

  const booksList = (state = books, action) => {
    const books = state.books; // eslint-disable-line
    switch (action.type) {
      case CREATE_BOOK:
        if (action.book !== undefined) {
          books.push(action.book);
          return ({ books });
        }
        break;
      case REMOVE_BOOK:
        return ({ books: books.filter(book => book.id !== action.book) });
      default:
        return state;
    }
    return state;
  };
  return booksList;
}

export default booksReducer;
