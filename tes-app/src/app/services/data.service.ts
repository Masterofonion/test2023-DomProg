import { Injectable } from '@angular/core';
import { of, Observable, delay } from 'rxjs';
import { IBook } from '../model/book.interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getBooks(): Observable<IBook[]> {
    let books = this.getBooksFromLocalstorage();
    return of(books).pipe(delay(1000));
  }
  addBook(book: IBook) {
    let books = this.getBooksFromLocalstorage();
    let bookWithId: IBook = { ...book, id: Date.now().toString() };
    books.push(bookWithId);
    localStorage.setItem('booksStore', JSON.stringify(books));
    return of(bookWithId);
  }
  editBook(book: IBook) {
    console.log(book);
    let books = this.getBooksFromLocalstorage();
    books = [...books.filter((bookItem) => bookItem.id !== book.id), book];
    localStorage.setItem('booksStore', JSON.stringify(books));
    return of(book);
  }
  removeBook(book: IBook) {
    console.log('remove');
    let books = this.getBooksFromLocalstorage();
    books = books.filter((bookItem) => bookItem.id !== book.id);
    localStorage.setItem('booksStore', JSON.stringify(books));
    return of(book);
  }
  getBooksFromLocalstorage() {
    let rawData: string | null = localStorage.getItem('booksStore');
    let books: IBook[] = [];
    if (rawData) {
      books = JSON.parse(rawData);
    }
    return books;
  }
}
