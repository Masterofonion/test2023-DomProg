import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from 'src/app/model/book.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  bookInfoForm = this.fb.group({
    author: ['', [Validators.required]],
    pageCount: ['', [Validators.required]],
    name: ['', [Validators.required]],
    publicationDate: ['', [Validators.required]],
    id: '',
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IBook,
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder
  ) {
    if (data) {
      this.bookInfoForm.get('name')?.setValue(this.data.name);
      this.bookInfoForm.get('author')?.setValue(this.data.author);
      this.bookInfoForm
        .get('publicationDate')
        ?.setValue(this.data.publicationDate);
      this.bookInfoForm.get('pageCount')?.setValue(this.data.pageCount);
      this.bookInfoForm.get('id')?.setValue(this.data.id ? this.data.id : '');
    }
  }
  closeDialog(isCanceled: boolean) {
    if (isCanceled) {
      this.dialogRef.close();
    }
    if (!isCanceled && this.bookInfoForm.valid) {
      this.dialogRef.close(this.bookInfoForm.value);
    }
  }
}
