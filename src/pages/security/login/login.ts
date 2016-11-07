import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from "../../tabs/tabs";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {RegisterPage} from "../register/register";
import {HttpResourceService} from "../../../providers/http-resource-service";
import {Http} from "@angular/http";


/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public httpResourceService: HttpResourceService, public http: Http) {

    }

    ionViewDidLoad() {
        console.log('Hello Login Page');
    }

    login() {
        // this.http.get("http://www.baidu.com").subscribe();
        this.httpResourceService.get('http://www.baidu.com/').subscribe();
        // this.navCtrl.setRoot(TabsPage);
    }

    forgetPassword() {
        this.navCtrl.push(ForgetPasswordPage)
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
