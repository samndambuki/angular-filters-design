import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-condition-dialog',
  imports: [
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButton,
  ],
  templateUrl: './condition-dialog.component.html',
  styleUrl: './condition-dialog.component.scss',
})
export class ConditionDialogComponent {
  conditionValue = '';
  constructor(
    private dialogRef: MatDialogRef<ConditionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { field: string }
  ) {}
  close() {
    this.dialogRef.close();
  }
  apply() {
    this.dialogRef.close(this.conditionValue);
  }
}
