import { combineReducers } from 'redux';
import booksData from './booksData';
import booksReducer from './books';

const rootReducer = combineReducers({
  data: booksData,
  books: booksReducer,
});

export default rootReducer;
