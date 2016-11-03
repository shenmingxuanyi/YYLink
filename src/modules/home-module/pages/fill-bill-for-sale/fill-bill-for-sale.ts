import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForSale page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-sale',
    templateUrl: 'fill-bill-for-sale.html'
})
export class FillBillForSale {

    constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForSale Page');
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
