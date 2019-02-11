import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {ActionModalPage} from '../action-modal/action-modal'
import {InvoiceModalPage} from '../invoice-modal/invoice-modal'
import {IncentivesPage} from '../incentives/incentives'

/**
 * Generated class for the CompanyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
})
export class CompanyDetailsPage {
  data : any = {};
  headingTitle: string = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public navParams: NavParams) {
    this.data = this.navParams.get('data');
    this.headingTitle = this.data.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetailsPage');
  }

  openModal(data){
    switch(data) {
      case 'sale':
        const Actionmodal = this.modalCtrl.create(ActionModalPage, { userId: 8675309 });
        Actionmodal.onDidDismiss(data => {
          alert(data.foo);
        });
        Actionmodal.present();
        break;
      case 'invoice':
        const Invoicemodal = this.modalCtrl.create(InvoiceModalPage, { userId: 8675309 });
        Invoicemodal.onDidDismiss(data => {
          alert(data.foo);
        });
        Invoicemodal.present();
        break;
      case 'incentives':
        const Incentivesmodal = this.modalCtrl.create(IncentivesPage, { userId: 8675309 });
        Incentivesmodal.onDidDismiss(data => {
          alert(data.foo);
        });
        Incentivesmodal.present();
        break;
      default:
        console.log('it is a default case please take care of it.')
    }
  }

}
