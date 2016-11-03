import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OptionIntroduce page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-option-introduce',
  templateUrl: 'option-introduce.html'
})
export class OptionIntroduce {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OptionIntroduce Page');
  }

}
