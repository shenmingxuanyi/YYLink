import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/*
 Generated class for the BillViewFilterPopover page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-bill-view-filter-popover',
    templateUrl: 'bill-view-filter-popover.html'
})
export class BillViewFilterPopover {

    billViewFilterType: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
        this.billViewFilterType = this.navParams.get("billViewFilterType") || 'date';
    }

    close() {
        if (this.navParams.get("billViewFilterType") != this.billViewFilterType) {
            this.viewController.dismiss({billViewFilterType: this.billViewFilterType});
        }
    }

    ionViewDidLoad() {
        console.log('Hello BillViewFilterPopover Page');
    }


}
