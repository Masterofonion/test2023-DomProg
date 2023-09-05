import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BooksActions from '../store/actions';
import { DataService } from '../services/data.service';
@Injectable()
export class BooksEffects {
  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.getBooks),
      mergeMap(() =>
        this.data
          .getBooks()
          .pipe(map((books) => BooksActions.getBooksSuccess({ books })))
      )
    )
  );
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.addBook),
      mergeMap((action) =>
        this.data
          .addBook(action.book)
          .pipe(map((book) => BooksActions.addBookSuccess({ book })))
      )
    )
  );
  editBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.editBook),
      mergeMap((action) =>
        this.data
          .editBook(action.book)
          .pipe(map((book) => BooksActions.editBookSuccess({ book })))
      )
    )
  );
  removeBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.removeBook),
      mergeMap((action) =>
        this.data
          .removeBook(action.book)
          .pipe(map((book) => BooksActions.removeBookSuccess({ book })))
      )
    )
  );

  constructor(private actions$: Actions, private data: DataService) {}
}
