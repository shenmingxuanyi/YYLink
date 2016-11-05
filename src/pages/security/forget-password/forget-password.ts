import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgetPasswordForSetPasswordPage} from "../forget-password-for-set-password/forget-password-for-set-password";

@Component({
    selector: 'page-forget-password',
    templateUrl: 'forget-password.html'
})
export class ForgetPasswordPage {


    findType: string = 'phone';

    findTypeList = [
        {
            name: '手机验证',
            value: 'phone',
            icon: 'ios-phone-portrait-outline'
        }, {
            name: '邮箱验证',
            value: 'email',
            icon: 'ios-mail-outline'
        }
    ];

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello ForgetPassword Page');
    }

    onNext() {
        this.navCtrl.push(ForgetPasswordForSetPasswordPage)
    }

}
