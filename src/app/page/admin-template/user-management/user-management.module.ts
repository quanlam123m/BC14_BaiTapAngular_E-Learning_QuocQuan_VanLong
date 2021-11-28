import { AddUsersComponent } from './add-users/add-users.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { MaterialModule } from 'src/app/_core/shares/material.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserManagementComponent, AddUsersComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    NgbPaginationModule,
    FormsModule,
  ],
})
export class UserManagementModule {}
