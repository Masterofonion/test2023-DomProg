import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBook } from 'src/app/model/book.interface';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { OpenDialogDirective } from 'src/app/directives/open-dialog.directive';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, OpenDialogDirective],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() bookData: IBook;
  @Output() edit = new EventEmitter<IBook>();
  @Output() remove = new EventEmitter<IBook>();
}
