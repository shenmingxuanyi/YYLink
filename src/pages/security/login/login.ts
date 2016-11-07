import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {RegisterPage} from "../register/register";
import {HttpResourceService} from "../../../providers/http-resource-service";
import {RESTFUL_RESOURCE_ENDPOINT, RESTFUL_RESOURCES} from "../../../configs/resource.config";
import {TabsPage} from "../../tabs/tabs";
import  "cryptico-js"
import {RSA_PUBLIC_KEY} from "../../../configs/security.config";

declare var cryptico: any;

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    phone: string;

    password: string;

    constructor(public navCtrl: NavController, public httpResourceService: HttpResourceService) {

    }

    ionViewDidLoad() {
        console.log('Hello Login Page');
    }

    login() {
        console.log(cryptico);
        console.log(RSA_PUBLIC_KEY)
        console.log(cryptico.encrypt(this.password, RSA_PUBLIC_KEY))
        let parameters = {
            phone: this.phone,
            password: cryptico.encrypt(this.password, RSA_PUBLIC_KEY)
        };

        this.httpResourceService.post(RESTFUL_RESOURCE_ENDPOINT + RESTFUL_RESOURCES.SECURITY.LOGIN, parameters)
            .subscribe((data: any)=> {
                if ('0' == data.code) {
                    this.navCtrl.setRoot(TabsPage);
                }
            });
    }

    forgetPassword() {
        this.navCtrl.push(ForgetPasswordPage)
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
