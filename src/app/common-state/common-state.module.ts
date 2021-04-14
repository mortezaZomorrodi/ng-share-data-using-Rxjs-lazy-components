import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonSettingService} from './common-setting.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommonStateModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CommonModule,
      providers: [
        CommonSettingService
      ]
    };
  }
}
