import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockDetailPage } from './stock-detail';

@NgModule({
  declarations: [
    StockDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StockDetailPage),
  ],
})
export class StockDetailPageModule {}
