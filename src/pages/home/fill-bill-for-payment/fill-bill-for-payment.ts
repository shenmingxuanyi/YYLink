import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForPayment page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-payment',
    templateUrl: 'fill-bill-for-payment.html'
})
export class FillBillForPaymentPage {

    payType: string = 'xj';
    payTypeList = [
        {
            name: '现金',
            value: 'xj',
            icon: 'logo-yen'
        },
        {
            name: '转账',
            value: 'zz',
            icon: 'ios-card-outline'
        }, {
            name: '汇票',
            value: 'hp',
            icon: 'ios-cash-outline'
        }
    ]

    dateTime: string = '2016-09-09'

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForPayment Page');
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
