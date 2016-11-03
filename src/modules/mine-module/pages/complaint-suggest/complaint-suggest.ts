import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ComplaintSuggest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-complaint-suggest',
  templateUrl: 'complaint-suggest.html'
})
export class ComplaintSuggest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ComplaintSuggest Page');
  }

}
