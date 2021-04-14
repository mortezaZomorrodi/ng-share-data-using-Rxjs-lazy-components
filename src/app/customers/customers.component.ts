import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommonSettingService} from '../common-state/common-setting.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {

 private sub: Subscription;
  changedVale: any = 'مقدار پیش فرض';
  changeValueForAllCustomer: any;
  state2Inside = 'نگه دار داخلی کامپوننت';

  constructor(private commonSettingService: CommonSettingService) {
  }

  ngOnInit() {
    this.sub = this.commonSettingService.getSettingBehaviorSubject.subscribe(p => {
     this.changedVale = p;
    });
   // this.changedVale = this.commonSettingService.state;
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

  propagateCustomer() {
    this.commonSettingService.changeSettings(this.changeValueForAllCustomer);
  }

  propagateState2() {
    this.commonSettingService.changeSettings2(this.state2Inside);
  }
}
