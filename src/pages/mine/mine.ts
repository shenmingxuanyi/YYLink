import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Mine page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-mine',
    templateUrl: 'mine.html'
})
export class MinePage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Mine Page');
    }

}
