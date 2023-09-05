import { createAction, props } from '@ngrx/store';
import { IBook } from '../model/book.interface';

export const getBooks = createAction('[Books] Get Books');
export const getBooksSuccess = createAction(
  '[Books] Get Books Success',
  props<{ books: IBook[] }>()
);
export const getBooksFailure = createAction(
  '[Books] Get Books Failure',
  props<{ error: string }>()
);

export const addBook = createAction(
  '[Books] Add Book',
  props<{ book: IBook }>()
);
export const addBookSuccess = createAction(
  '[Books] Add Book Success',
  props<{ book: IBook }>()
);
export const removeBook = createAction(
  '[Books] Remove Book',
  props<{ book: IBook }>()
);
export const removeBookSuccess = createAction(
  '[Books] Remove Book Success',
  props<{ book: IBook }>()
);

export const editBook = createAction(
  '[Books] Edit Book',
  props<{ book: IBook }>()
);
export const editBookSuccess = createAction(
  '[Books] Edit Book Success',
  props<{ book: IBook }>()
);
