import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MatDialogActions,MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
  ],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss',
})
export class FilterDialogComponent {
  filters = ['firstName', 'lastName', 'email'];
  selectedFilter = '';
  constructor(private dialogRef: MatDialogRef<FilterDialogComponent>) {}
  close() {
    this.dialogRef.close();
  }
  apply() {
    this.dialogRef.close(this.selectedFilter);
  }
}
