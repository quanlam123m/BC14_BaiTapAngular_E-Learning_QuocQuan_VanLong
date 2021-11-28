import { MaterialModule } from 'src/app/_core/shares/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { CourseManagementComponent } from './course-management.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditCouserComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    CourseManagementComponent,
    AddCourseComponent,
    EditCouserComponent,
  ],
  imports: [
    CommonModule,
    CourseManagementRoutingModule,
    NgbPaginationModule,
    MaterialModule,
    NgxPaginationModule,
    NgbPaginationModule,
    FormsModule,
  ],
})
export class CourseManagementModule {}
