import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSettingService {

  public getSettingSubject: Subject<any>;
  public getSettingBehaviorSubject: BehaviorSubject<any>;
  state: any;
  state2: any;

  constructor() {
    this.getSettingSubject = new Subject<any>();
    this.getSettingBehaviorSubject = new BehaviorSubject<any>('');
  }

  changeSettings(data: any) {
    this.state = data;
    this.getSettingSubject.next(this.state);
  }
  changeSettings2(data: any) {
    this.state2 = data;
  }
}
