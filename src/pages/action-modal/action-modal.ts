import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import {InvoiceModalPage} from '../invoice-modal/invoice-modal';
/**
 * Generated class for the ActionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-modal',
  templateUrl: 'action-modal.html',
})
export class ActionModalPage {

  // tab1Root = InvoiceModalPage;
  // tab2Root = InvoiceModalPage;
  // tab3Root = InvoiceModalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl : ViewController) {
    alert(this.navParams.get('userId'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionModalPage');
  }

  closeActionModal(){
    setTimeout(()=>{
    let data = {foo :"Sales"}
    this.viewctrl.dismiss(data);
    },100)
  }

}
