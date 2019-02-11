import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the InvoiceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-modal',
  templateUrl: 'invoice-modal.html',
})
export class InvoiceModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceModalPage');
  }
  closeInvoiceModal(){
    setTimeout(()=>{
      let data = {foo :"invoice"}
      this.viewctrl.dismiss(data);
    },100)
    
  }

}
