import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {RegisterPage} from "../register/register";
import {UserService} from "../../../providers/user-service/user-service";

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
        this.userService.clearUser();
        this.userService.getLastUserName()
            .then((lastUsername)=> {
                this.phone = lastUsername;
            });
    }

    login() {
        this.userService.login(this.phone, this.password).subscribe((data: any)=> {
        });
    }

    forgetPassword() {
        this.navCtrl.push(ForgetPasswordPage)
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
