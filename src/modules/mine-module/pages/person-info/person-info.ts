import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the PersonInfo page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-person-info',
    templateUrl: 'person-info.html'
})
export class PersonInfo {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello PersonInfo Page');
    }

}
