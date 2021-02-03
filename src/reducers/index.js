import { combineReducers } from 'redux';
import booksData from './books';

const rootReducer = combineReducers({
  books: booksData,
});

export default rootReducer;
