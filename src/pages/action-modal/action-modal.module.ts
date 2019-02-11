import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionModalPage } from './action-modal';

@NgModule({
  declarations: [
    ActionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionModalPage),
  ],
})
export class ActionModalPageModule {}
