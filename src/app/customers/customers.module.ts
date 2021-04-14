import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {CommonStateModule} from '../common-state/common-state.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CommonStateModule,
    FormsModule
  ],
  declarations: [CustomersComponent, DashboardComponent]
})
export class CustomersModule { }
