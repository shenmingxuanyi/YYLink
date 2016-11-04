import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonInfoPage} from "../person-info/person-info";
import {PersonalSettingPage} from "../personal-setting/personal-setting/personal-setting";
import {MyBillsPage} from "../main/my-bills/my-bills";
import {ConsumptioAnalysisPage} from "../main/consumptio-analysis/consumptio-analysis";

/*
 Generated class for the Mine page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-mine',
    templateUrl: 'mine.html'
})
export class MinePage {

    personInfo = PersonInfoPage;
    personalSetting = PersonalSettingPage;
    myBills = MyBillsPage;
    consumptioAnalysis = ConsumptioAnalysisPage;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Mine Page');
    }

    goToView(view: any) {
        this.navCtrl.parent.parent.push(view);
    }


}
