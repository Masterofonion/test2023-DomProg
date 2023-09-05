import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { Store, select } from '@ngrx/store';
import * as BooksActions from '../../store/actions';
import { isLoadingBooks, selectAllBooks } from 'src/app/store/selectors';
import { IAppState } from 'src/app/model/appStateInterface';
import { IBook } from 'src/app/model/book.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { OpenDialogDirective } from 'src/app/directives/open-dialog.directive';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    BookCardComponent,
    IconButtonComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
    DialogComponent,
    ConfirmationDialogComponent,
    OpenDialogDirective,
    MatDividerModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  isLoading$: Observable<boolean>;
  constructor(private store: Store<IAppState>, public dialog: MatDialog) {
    this.books$ = this.store.pipe(select(selectAllBooks));
    this.isLoading$ = this.store.pipe(select(isLoadingBooks));
  }
  ngOnInit(): void {
    this.store.dispatch(BooksActions.getBooks());
  }

  openDialog(bookData?: IBook) {
    console.log('open dialog');
    this.dialog
      .open(DialogComponent, { data: bookData, width: '500px' })
      .afterClosed()
      .subscribe((data) => {
        if (data && bookData) {
          this.store.dispatch(BooksActions.editBook({ book: data }));
        }
        if (data && !bookData) {
          this.store.dispatch(BooksActions.addBook({ book: data }));
        }
      });
  }
  openRemoveConfirmationDialog(bookData: IBook) {
    this.dialog
      .open(ConfirmationDialogComponent, { width: '300px' })
      .afterClosed()
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          console.log(bookData);
          this.store.dispatch(BooksActions.removeBook({ book: bookData }));
        }
      });
  }
}
