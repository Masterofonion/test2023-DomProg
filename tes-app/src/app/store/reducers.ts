import { createReducer, on } from '@ngrx/store';
import { IBooksState } from '../model/booksState.interface';
import * as BooksActions from './actions';
export const initialState: IBooksState = {
  isLoading: false,
  books: [],
  error: null,
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.getBooks, (state: IBooksState) => ({
    ...state,
    isLoading: true,
  })),
  on(BooksActions.getBooksSuccess, (state: IBooksState, action) => ({
    ...state,
    isLoading: false,
    books: action.books,
  })),

  on(BooksActions.addBook, (state: IBooksState, action) => ({
    ...state,
    isLoading: true,
  })),
  on(BooksActions.addBookSuccess, (state: IBooksState, action) => ({
    ...state,
    isLoading: false,
    books: [...state.books, action.book],
  })),
  on(BooksActions.editBook, (state: IBooksState, action) => ({
    ...state,
    isLoading: true,
  })),
  on(BooksActions.editBookSuccess, (state: IBooksState, action) => ({
    ...state,
    isLoading: false,
    books: [
      ...state.books.filter((book) => book.id !== action.book.id),
      action.book,
    ],
  })),
  on(BooksActions.removeBook, (state: IBooksState, action) => ({
    ...state,
    isLoading: true,
  })),
  on(BooksActions.removeBookSuccess, (state: IBooksState, action) => ({
    ...state,
    isLoading: false,
    books: [...state.books.filter((book) => book.id !== action.book.id)],
  }))
);
