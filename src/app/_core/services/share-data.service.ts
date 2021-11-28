import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  data: any = new BehaviorSubject({} as Object);
  dataUser: any = new BehaviorSubject({} as Object);

  shareData = this.data.asObservable();
  shareDataUser = this.dataUser.asObservable();
  constructor() {}
  sharingData(_data: any) {
    console.log('_data', _data);
    this.data.next(_data);
  }
  sharingUser(_user: any) {
    console.log('_user', _user);
    this.dataUser.next(_user);
  }
}
