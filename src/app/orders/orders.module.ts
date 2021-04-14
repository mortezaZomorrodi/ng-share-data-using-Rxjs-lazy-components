import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {CommonStateModule} from '../common-state/common-state.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CommonStateModule,
    FormsModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
