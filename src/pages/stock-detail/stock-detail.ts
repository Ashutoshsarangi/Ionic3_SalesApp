import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantDetailPage } from '../plant-detail/plant-detail' 
/**
 * Generated class for the StockDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-detail',
  templateUrl: 'stock-detail.html',
})
export class StockDetailPage {

  pet:string ='';
  items:Array<any> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
    this.items = [
      {name : "w0001"},
      {name : "w0002"},
      {name : "w0003"},
      {name : "w0004"},
      {name : "w0005"},
      {name : "w0006"},
      {name : "w0007"},
      {name : "w0008"},
      {name : "w0009"},
      {name : "w0010"},
      {name : "w0011"},
      {name : "w0012"},
      {name : "w0013"},
      {name : "w0014"}
    ]
  }

  ionViewDidLoad() {
    this.pet= 'kittens'
    console.log('ionViewDidLoad StockDetailPage');
    
  }

  itemSelected(item){
    this.items = [
      {name : "w0001"},
      {name : "w0002"},
      {name : "w0003"},
      {name : "w0004"},
      {name : "w0005"},
      {name : "w0006"},
      {name : "w0007"},
      {name : "w0008"},
      {name : "w0009"},
      {name : "w0010"},
      {name : "w0011"},
      {name : "w0012"},
      {name : "w0013"},
      {name : "w0014"}
    ]
    //modal open
    const plantDetailModal = this.modalCtrl.create(PlantDetailPage, { data: item, plants : this.items });
      plantDetailModal.onDidDismiss(data => {
          alert(data.foo);
      });
      plantDetailModal.present();
  }

}
