import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientServicesProvider } from '../../providers/client-services/client-services';

import {CompanyDetailsPage} from '../company-details/company-details';


/**
 * Generated class for the CompanyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
  providers: [ClientServicesProvider]
})
export class CompanyListPage {

  companies: Array<{name: string, icon:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientServices: ClientServicesProvider) {
    this.companies = [
      { name: 'Home', icon:'arrow-forward' },
      { name: 'List', icon:'arrow-forward'},
      { name: 'Campany Names', icon:'arrow-forward'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyListPage');
  }
  openPage(data){
    this.clientServices.openPage(CompanyDetailsPage, data);
  }
  

}
