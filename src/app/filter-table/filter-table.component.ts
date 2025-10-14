import { Component } from '@angular/core';
import { User } from '../../user';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { ConditionDialogComponent } from '../condition-dialog/condition-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-filter-table',
  imports: [MatButton, MatIconModule, MatTableModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.scss',
})
export class FilterTableComponent {
  allUsers: User[] = [
    { firstName: 'Samuel', lastName: 'Ndambuki', email: 'samgmail.com' },
    { firstName: 'Dickson', lastName: 'Githere', email: 'dicksongmail.com' },
    { firstName: 'John', lastName: 'Doe', email: 'johngmail.com' },
  ];
  filteredUsers: User[] = [...this.allUsers];
  constructor(private dialog: MatDialog) {}
  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      height: '300px',
    });
    dialogRef.afterClosed().subscribe((selectedFiled) => {
      if (selectedFiled) {
        const conditionDialog = this.dialog.open(ConditionDialogComponent, {
          width: '350px',
          data: { field: selectedFiled },
        });
        conditionDialog.afterClosed().subscribe((condition) => {
          if (condition) {
            this.applyFilter(selectedFiled, condition);
          }
        });
      }
    });
  }
  applyFilter(field: string, condition: string) {
    this.filteredUsers = this.allUsers.filter((user) =>
      user[field as keyof User]
        .toLowerCase()
        .startsWith(condition.toLowerCase())
    );
  }
}
