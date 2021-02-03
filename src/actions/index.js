import { CREATE_BOOK, REMOVE_BOOK } from './constants';

export const addBook = book => ({
  type: CREATE_BOOK,
  book: book,
});

export const deleteBook = book => ({
  type: REMOVE_BOOK,
  book: book
});
