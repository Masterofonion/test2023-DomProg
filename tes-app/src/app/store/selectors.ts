import { createSelector } from '@ngrx/store';
import { IBooksState } from '../model/booksState.interface';
import { IAppState } from '../model/appStateInterface';
export const selectBooks = (state: IAppState) => state.books;
export const selectAllBooks = createSelector(
  selectBooks,
  (state: IBooksState) => state.books
);
export const isLoadingBooks = createSelector(
  selectBooks,
  (state: IBooksState) => state.isLoading
);
