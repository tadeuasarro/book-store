import { CREATE_BOOK, REMOVE_BOOK } from '../actions/constants';

const roundID = () => Number((Math.random() * 10000).toFixed(0));
const booksData = {
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
};

const booksReducer = (state = booksData, action) => {
  console.log(state);
  console.log(action.book);
  switch (action.type) {
    case CREATE_BOOK:
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
