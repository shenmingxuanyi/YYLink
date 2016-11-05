import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterForSetPasswordPage} from "../register-for-set-password/register-for-set-password";

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Register Page');
    }

    goLogin() {
        this.navCtrl.pop();
    }

    onNext() {
        this.navCtrl.push(RegisterForSetPasswordPage)
    }

}
