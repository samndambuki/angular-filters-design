import { Component } from '@angular/core';
import { User } from '../../user';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { ConditionDialogComponent } from '../condition-dialog/condition-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-table',
  imports: [
    MatButton,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.scss',
})
export class FilterTableComponent {
  // allUsers: User[] = [
  //   {
  //     firstName: 'Samuel',
  //     lastName: 'Ndambuki',
  //     email: 'sam@gmail.com',
  //     role: 'Admin',
  //     status: 'Active',
  //     createdAt: '2024-10-01',
  //     phoneNumber: '0712345678',
  //     location: 'Nairobi',
  //   },
  //   {
  //     firstName: 'Dickson',
  //     lastName: 'Githere',
  //     email: 'dickson@gmail.com',
  //     role: 'User',
  //     status: 'Inactive',
  //     createdAt: '2024-08-15',
  //     phoneNumber: '0722334455',
  //     location: 'Mombasa',
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'john@gmail.com',
  //     role: 'Moderator',
  //     status: 'Active',
  //     createdAt: '2024-07-20',
  //     phoneNumber: '0799887766',
  //     location: 'Kisumu',
  //   },
  // ];

  allUsers: User[] = [
    {
      firstName: 'Samuel',
      lastName: 'Ndambuki',
      email: 'sam@gmail.com',
      role: 'Admin',
      status: 'Active',
      createdAt: '2024-10-01',
      phoneNumber: '0712345678',
      location: 'Nairobi',
    },
    {
      firstName: 'Dickson',
      lastName: 'Githere',
      email: 'dickson@gmail.com',
      role: 'User',
      status: 'Inactive',
      createdAt: '2024-08-15',
      phoneNumber: '0722334455',
      location: 'Mombasa',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      role: 'Moderator',
      status: 'Active',
      createdAt: '2024-07-20',
      phoneNumber: '0799887766',
      location: 'Kisumu',
    },
    {
      firstName: 'Mary',
      lastName: 'Wambui',
      email: 'mary.wambui@gmail.com',
      role: 'User',
      status: 'Active',
      createdAt: '2024-09-10',
      phoneNumber: '0733445566',
      location: 'Eldoret',
    },
    {
      firstName: 'Peter',
      lastName: 'Otieno',
      email: 'peter.otieno@gmail.com',
      role: 'Admin',
      status: 'Inactive',
      createdAt: '2024-06-18',
      phoneNumber: '0788223344',
      location: 'Nakuru',
    },
    {
      firstName: 'Alice',
      lastName: 'Kamau',
      email: 'alice.kamau@gmail.com',
      role: 'User',
      status: 'Active',
      createdAt: '2024-05-23',
      phoneNumber: '0711998877',
      location: 'Thika',
    },
    {
      firstName: 'Brian',
      lastName: 'Mwangi',
      email: 'brian.mwangi@gmail.com',
      role: 'Moderator',
      status: 'Inactive',
      createdAt: '2024-09-02',
      phoneNumber: '0744112233',
      location: 'Meru',
    },
    {
      firstName: 'Lucy',
      lastName: 'Achieng',
      email: 'lucy.achieng@gmail.com',
      role: 'User',
      status: 'Active',
      createdAt: '2024-08-30',
      phoneNumber: '0725667788',
      location: 'Kakamega',
    },
    {
      firstName: 'Kevin',
      lastName: 'Njoroge',
      email: 'kevin.njoroge@gmail.com',
      role: 'Admin',
      status: 'Active',
      createdAt: '2024-07-15',
      phoneNumber: '0799112233',
      location: 'Nyeri',
    },
    {
      firstName: 'Sarah',
      lastName: 'Mutua',
      email: 'sarah.mutua@gmail.com',
      role: 'Moderator',
      status: 'Inactive',
      createdAt: '2024-10-05',
      phoneNumber: '0718223344',
      location: 'Machakos',
    },
  ];

  filters = [
    'firstName',
    'lastName',
    'email',
    'role',
    'status',
    'createdAt',
    'phoneNumber',
    'location',
  ];
  filteredUsers: User[] = [...this.allUsers];
  constructor(private dialog: MatDialog) {}
  openConditionDialog(selectedField: string) {
    const conditionDialog = this.dialog.open(ConditionDialogComponent, {
      width: '350px',
      data: { field: selectedField },
    });

    conditionDialog.afterClosed().subscribe((condition) => {
      if (condition) {
        this.applyFilter(selectedField, condition);
      }
    });
  }
  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      height: '300px',
    });
    // dialogRef.afterClosed().subscribe((selectedFiled) => {
    //   if (selectedFiled) {
    //     const conditionDialog = this.dialog.open(ConditionDialogComponent, {
    //       width: '350px',
    //       data: { field: selectedFiled },
    //     });
    //     conditionDialog.afterClosed().subscribe((condition) => {
    //       if (condition) {
    //         this.applyFilter(selectedFiled, condition);
    //       }
    //     });
    //   }
    // });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { selectedFilter, quickFilters, customFilters } = result;
        let filteredData = [...this.allUsers];
        const activeQuickFilters = Object.keys(quickFilters).filter(
          (key) => quickFilters[key] === true
        );
        if (activeQuickFilters.length > 0) {
          this.filteredUsers = this.allUsers.filter(
            (user) =>
              activeQuickFilters.includes(user.status) ||
              activeQuickFilters.includes(user.role)
          );
        }
        if (customFilters && customFilters.length > 0) {
          customFilters.forEach((filter: any) => {
            const { field, operator, value } = filter;
            filteredData = filteredData.filter((user) => {
              
            });
          });
        } else if (selectedFilter) {
          const conditionDialog = this.dialog.open(ConditionDialogComponent, {
            width: '350px',
            data: { field: selectedFilter },
          });
          conditionDialog.afterClosed().subscribe((condition) => {
            if (condition) {
              this.applyFilter(selectedFilter, condition);
            }
          });
        }
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
