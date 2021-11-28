import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../_core/services/data.service';
import { ShareDataService } from '../../../../_core/services/share-data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  image: any;
  constructor(private shareData: ShareDataService, private data: DataService) {}
  userNameAdmin: any;

  ngOnInit(): void {
    this.shareData.shareData.subscribe(
      (result: any) => (this.userNameAdmin = result)
    );
  }

  fileName = '';

  onFileSelected(event: any): void {
    // let reader = new FileReader();

    let file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
    }
    // console.log(event);
    // if (file) {
    //   this.fileName = file.name;
    // }
  }

  newValue: any = '';
  chooseListCourse(event: any) {
    console.log(event);
    return (this.newValue = event);
  }

  addCourse(course: any): void {
    console.log(course);
    course.maDanhMucKhoaHoc = this.newValue;
    course.hinhAnh = this.fileName;
    course.maNhom = 'GP03';
    course.maLoaiNguoiDung = 'GV';
    this.data.post('QuanLyKhoaHoc/ThemKhoaHoc', course).subscribe((result) => {
      if (result) {
        alert('Thêm khóa học thành công');
        window.location.reload();
      }
    });
  }
}
