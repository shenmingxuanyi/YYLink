import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {OptionIntroducePage} from "../option-introduce/option-introduce";
import {BeginnerHelpPage} from "../beginner-help/beginner-help";
import {LabelManagerPage} from "../label-manager/label-manager";
import {ComplaintSuggestPage} from "../complaint-suggest/complaint-suggest";

/*
 Generated class for the PersonalSetting page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-personal-setting',
    templateUrl: 'personal-setting.html'
})
export class PersonalSettingPage {


    optionIntroduce = OptionIntroducePage;

    beginnerHelp = BeginnerHelpPage;

    labelManager = LabelManagerPage;

    complaintSuggest = ComplaintSuggestPage;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    pushPage(page: any) {
        this.navCtrl.push(page);
    }

    dataSynchronization() {
        let toast = this.toastCtrl.create({
            message: '数据同步成功',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

    ionViewDidLoad() {
        console.log('Hello PersonalSetting Page');
    }

    logOut() {
        // this.navCtrl.setRoot(Login)
    }

}
