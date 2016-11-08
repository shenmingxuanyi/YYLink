import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {RegisterPage} from "../register/register";
import {UserService} from "../../../providers/user-service/user-service";

declare var JSEncrypt: any;

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    phone: string;

    password: string;

    constructor(public navCtrl: NavController, public userService: UserService) {

    }

    ionViewDidLoad() {
        console.log('Hello Login Page');
        this.userService.getUserInfo()
            .then((userInfo)=> {
                console.log(userInfo);
                if (userInfo) {
                    this.phone = userInfo.phone;
                }
            });
    }

    login() {
        this.userService.login(this.phone, this.password).subscribe((data)=> {
        });
    }

    forgetPassword() {
        this.navCtrl.push(ForgetPasswordPage)
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
