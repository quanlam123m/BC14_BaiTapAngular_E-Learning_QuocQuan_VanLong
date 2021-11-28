import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../../_core/services/data.service';
import { ShareDataService } from '../../../_core/services/share-data.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
})
export class CourseManagementComponent implements OnInit {
  constructor(private data: DataService, private shareData: ShareDataService) {}

  listCourse: any[] = [];
  subListCourse = new Subscription();
  page: any = 1;
  pageSize: any = 10;

  ngOnInit(): void {
    this.getCourse();
  }

  editCourse(course: any) {
    this.shareData.sharingUser(course);
    console.log('editcourse', course);
  }

  getCourse() {
    this.subListCourse = this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03')
      .subscribe((result: any) => {
        console.log(result);
        this.listCourse = result;
      });
  }
  deleteCourse(id: any) {
    this.data
      .delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
      .subscribe((result: any) => {
        if (result) {
          alert('Xoá khoá học thành công');
          window.location.reload();
        }
      });
  }
}
