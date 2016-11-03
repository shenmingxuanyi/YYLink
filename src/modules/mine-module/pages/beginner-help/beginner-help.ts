import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BeginnerHelp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beginner-help',
  templateUrl: 'beginner-help.html'
})
export class BeginnerHelp {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BeginnerHelp Page');
  }

}
