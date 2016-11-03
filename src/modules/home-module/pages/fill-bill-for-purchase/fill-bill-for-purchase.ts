import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForPurchase page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-purchase',
    templateUrl: 'fill-bill-for-purchase.html'
})
export class FillBillForPurchase {

    dateTime: string = '2016-09-09'

    constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForPurchase Page');
    }

    saveBill() {
        let toast = this.toastCtrl.create({
            message: '保存报帐信息成功',
            duration: 3000
        });
        toast.present().then(()=> {
            this.navCtrl.pop();
        });
    }

}
