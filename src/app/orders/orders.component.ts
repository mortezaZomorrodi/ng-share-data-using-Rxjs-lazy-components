import {Component, OnInit} from '@angular/core';
import {CommonSettingService} from '../common-state/common-setting.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  changeValueForAll = '';

  constructor(private commonSettingService: CommonSettingService) {
  }

  ngOnInit() {
  }

  propagate() {
    // this.commonSettingService.changeSettings(this.changeValueForAll);
    this.commonSettingService.getSettingBehaviorSubject.next(this.changeValueForAll);
  }
}
