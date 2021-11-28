import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('UserAdmin')) {
      //đã login
      return true;
    }
    //chưa login-chuyển hướng về trang auth
    this.router.navigate(['/auth']);
    return false;
  }
}
