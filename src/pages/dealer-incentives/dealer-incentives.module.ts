import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerIncentivesPage } from './dealer-incentives';

@NgModule({
  declarations: [
    DealerIncentivesPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerIncentivesPage),
  ],
})
export class DealerIncentivesPageModule {}
