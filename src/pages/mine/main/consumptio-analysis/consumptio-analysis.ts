import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the ConsumptioAnalysis page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-consumptio-analysis',
    templateUrl: 'consumptio-analysis.html'
})
export class ConsumptioAnalysisPage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello ConsumptioAnalysis Page');
    }

}
