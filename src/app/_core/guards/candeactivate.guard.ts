import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/page/home-template/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    const result =
      component.canDeactivateRegister() ||
      window.confirm('Bạn có muốn rời khỏi trang này?');
    return result;
  }
}
