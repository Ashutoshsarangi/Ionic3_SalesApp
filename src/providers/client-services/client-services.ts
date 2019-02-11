import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the ClientServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientServicesProvider {

  constructor(public http: HttpClient, public navCtrl: NavController) {
    console.log('Hello ClientServicesProvider Provider');
  }

  openPage(name, param=''){
    this.navCtrl.push(name,{data:param});
  }
  

}
