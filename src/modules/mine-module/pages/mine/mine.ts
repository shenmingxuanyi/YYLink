import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonInfo} from "../person-info/person-info";
import {PersonalSetting} from "../personal-setting/personal-setting";
import {MyBills} from "../my-bills/my-bills";
import {ConsumptioAnalysis} from "../consumptio-analysis/consumptio-analysis";

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

    personInfo = PersonInfo;
    personalSetting = PersonalSetting;
    myBills = MyBills;
    consumptioAnalysis = ConsumptioAnalysis;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Mine Page');
    }


}
