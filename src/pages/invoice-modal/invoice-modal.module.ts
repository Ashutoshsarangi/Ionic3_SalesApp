import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceModalPage } from './invoice-modal';

@NgModule({
  declarations: [
    InvoiceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceModalPage),
  ],
})
export class InvoiceModalPageModule {}
