import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './constants';

export const addBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const deleteBook = book => ({
  type: REMOVE_BOOK,
  book,
});

export const filterBook = () => ({
  type: CHANGE_FILTER,
});
