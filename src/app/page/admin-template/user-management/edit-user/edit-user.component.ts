import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../_core/services/data.service';
import { ShareDataService } from '../../../../_core/services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private data: DataService,
    private shareData: ShareDataService,
    private router: Router
  ) {}

  user: any;
  ngOnInit(): void {
    this.shareData.shareDataUser.subscribe(
      (result: any) => (this.user = result)
    );
  }
  listUser: any;
  // newValue: any;
  // chooseUser(value: any) {
  //   return (this.newValue = value);
  // }

  updateUser(user: any): void {
    console.log('mới', user);
    // user.maLoaiNguoiDung = this.newValue;

    user.maNhom = 'GP03';
    this.listUser = this.data
      .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/admin/user-management']);

          alert('Cập nhật người dùng thành công');
        }
      });
  }
}
