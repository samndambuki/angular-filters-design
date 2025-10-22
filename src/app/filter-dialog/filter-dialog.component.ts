import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';
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
    MatCheckboxModule,
  ],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss',
})
export class FilterDialogComponent {
  // filters = [
  //   'firstName',
  //   'lastName',
  //   'email',
  //   'role',
  //   'status',
  //   'createdAt',
  //   'phoneNumber',
  //   'location',
  // ];
  // filters = ['role', 'status'];
  selectedFilter = '';
  quickFilters: { [key: string]: boolean } = {
    Active: false,
    Inactive: false,
    Admin: false,
    User: false,
  };
  constructor(private dialogRef: MatDialogRef<FilterDialogComponent>) {
    // this.filters.forEach((filter) => (this.quickFilters[filter] = false));
  }
  close() {
    this.dialogRef.close();
  }
  apply() {
    this.dialogRef.close({
      quickFilters: this.quickFilters,
      selectedFilter: this.selectedFilter,
    });
  }
}
