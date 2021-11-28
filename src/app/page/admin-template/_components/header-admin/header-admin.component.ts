import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../../../../_core/services/share-data.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.getUserName();
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  admin: any;
  userName: any;
  getUserName(): void {
    this.admin = localStorage.getItem('UserAdmin');
    this.admin = JSON.parse(this.admin);
    this.userName = this.admin.hoTen;

    this.shareData.sharingData(this.admin);
  }

  logout() {
    localStorage.removeItem('UserAdmin');
    this.router.navigate(['/auth']);
  }
}
