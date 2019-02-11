import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyDetailsPage } from './company-details';

@NgModule({
  declarations: [
    CompanyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyDetailsPage),
  ],
})
export class CompanyDetailsPageModule {}
