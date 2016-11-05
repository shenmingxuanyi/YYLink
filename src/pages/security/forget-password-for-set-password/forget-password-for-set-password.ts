import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-forget-password-for-set-password',
    templateUrl: 'forget-password-for-set-password.html'
})
export class ForgetPasswordForSetPasswordPage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello ForgetPasswordForSetPassword Page');
    }

    onComplete() {
        this.navCtrl.popToRoot()
    }
}
