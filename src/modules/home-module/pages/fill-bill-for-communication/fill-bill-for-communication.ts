import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForCommunication page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-communication',
    templateUrl: 'fill-bill-for-communication.html'
})
export class FillBillForCommunication {

    amount: string = '30';

    constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForCommunication Page');
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
