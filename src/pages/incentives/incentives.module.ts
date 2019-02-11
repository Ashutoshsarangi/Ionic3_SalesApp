import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncentivesPage } from './incentives';

@NgModule({
  declarations: [
    IncentivesPage,
  ],
  imports: [
    IonicPageModule.forChild(IncentivesPage),
  ],
})
export class IncentivesPageModule {}
