import { CREATE_BOOK, REMOVE_BOOK } from '../actions/constants';

const booksReducer = (state = null, action) => {
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
