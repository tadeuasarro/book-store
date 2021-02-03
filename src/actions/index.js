import { CREATE_BOOK, REMOVE_BOOK } from './constants';

export const addBook = () => ({
  type: CREATE_BOOK,
});

export const deleteBook = () => ({
  type: REMOVE_BOOK,
});
