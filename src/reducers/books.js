import { CREATE_BOOK, REMOVE_BOOK } from '../actions/constants';

const roundID = () => Number((Math.random() * 100).toFixed(0));

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
};

const booksReducer = (state = bookData, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      // do something here
      break;
    case REMOVE_BOOK:
      // do other thing here
      break;
    default:
      return state;
  }
  return state;
};

export default booksReducer;
