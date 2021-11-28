import { OnInit, Component } from '@angular/core';
import { DataService } from '../../../_core/services/data.service';
import { ShareDataService } from '../../../_core/services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  constructor(private data: DataService, private shareData: ShareDataService) {}
  listUser: any[] = [];
  subListUser = new Subscription();

  page: any = 1;
  pageSize: any = 10;

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.subListUser = this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }

  deleteUser(id: any) {
    this.data
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .subscribe((result: any) => {
        if (result) {
          alert('Xoá người dùng thành công');
          window.location.reload();
        }
      });
  }
  editUser(user: any) {
    this.shareData.sharingUser(user);
  }
  findUser() {
    this.subListUser = this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }
}
