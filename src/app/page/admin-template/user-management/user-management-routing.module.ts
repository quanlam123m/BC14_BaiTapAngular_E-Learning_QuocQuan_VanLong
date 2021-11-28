import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserManagementComponent } from './user-management.component';
const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
  },
  {
    path: 'add-users',
    component: AddUsersComponent,
  },
  {
    path: 'edit-users',
    component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
