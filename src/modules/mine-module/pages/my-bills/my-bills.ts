import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the MyBills page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-my-bills',
    templateUrl: 'my-bills.html'
})
export class MyBills {

    type: string = 'finished';

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello MyBills Page');
    }

}
