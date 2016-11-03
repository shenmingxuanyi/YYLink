import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForOther page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-other',
    templateUrl: 'fill-bill-for-other.html'
})
export class FillBillForOther {

    dataList = [
        {
            name: '手机验证',
            icon: 'ios-phone-portrait-outline',
            value: 'phone'
        },
        {
            name: '邮箱验证',
            icon: 'ios-mail-outline',
            value: 'email'
        }
    ];

    value: string = 'email';

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForOther Page');
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
