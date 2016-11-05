import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the RegisterForSetPassword page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register-for-set-password',
    templateUrl: 'register-for-set-password.html'
})
export class RegisterForSetPasswordPage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello RegisterForSetPassword Page');
    }

    onComplete() {
        this.navCtrl.popToRoot()
    }

}
