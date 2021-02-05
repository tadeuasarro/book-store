import { CREATE_BOOK, REMOVE_BOOK } from '../actions/constants';

const roundID = () => Number((Math.random() * 10000).toFixed(0));

const bookData = {
  books: [
    {
      id: roundID(),
      title: 'The Lord of the Rings',
      category: 'Fiction',
    },
    {
      id: roundID(),
      title: 'Star Wars',
      category: 'Fiction',
    },
    {
      id: roundID(),
      title: 'The Witcher',
      category: 'Fiction',
    },
    {
      id: roundID(),
      title: 'The Amazing Spider Man',
      category: 'Comic',
    },
  ],
  filter: 'All',
};

const booksReducer = (state = bookData, action) => {
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

export default booksReducer;
