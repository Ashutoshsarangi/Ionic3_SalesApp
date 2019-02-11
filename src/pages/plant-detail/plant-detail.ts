import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlantDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plant-detail',
  templateUrl: 'plant-detail.html',
})
export class PlantDetailPage {

  plant:Array<any> = [];
  plants : Array<any> = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewctrl : ViewController) {
   
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantDetailPage');
    this.plant = this.navParams.get('data');
    this.plants = this.navParams.get('plants');
    console.log(this.plants);
  }
  closeModal(){
    setTimeout(()=>{
      let data = {foo :"Plant Detail"}
      this.viewctrl.dismiss(data);
    },100)
  }

}
