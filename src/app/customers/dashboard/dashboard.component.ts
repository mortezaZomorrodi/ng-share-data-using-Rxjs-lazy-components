import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonSettingService} from '../../common-state/common-setting.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  changedVale = 'تلاش الکی';

  state2InDashboard = 'چی شد';

  constructor(private commonSettingService: CommonSettingService) {
  }

  ngOnInit(): void {
    this.sub = this.commonSettingService.getSettingSubject.subscribe(p => {
      this.changedVale = p;
    });

    this.state2InDashboard = this.commonSettingService.state2;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
