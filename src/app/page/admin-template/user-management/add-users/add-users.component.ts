import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../../../_core/services/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  constructor(private data: DataService) {}
  ngOnInit(): void {}

  newValue: any = '';
  chooseUser(value: any) {
    return (this.newValue = value);
  }

  addUser(user: any): void {
    user.maLoaiNguoiDung = this.newValue;
    user.maNhom = 'GP03';
    console.log(user);
    this.data
      .post('QuanLyNguoiDung/ThemNguoiDung', user)
      .subscribe((result) => {
        if (result) {
          alert('Thêm người dùng thành công');
          window.location.reload();
        }
      });
  }
}
