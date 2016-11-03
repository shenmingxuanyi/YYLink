import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForHotel page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-hotel',
    templateUrl: 'fill-bill-for-hotel.html'
})
export class FillBillForHotel {

    fapiaoType: string = 'ptfp'

    startDateTime: string = '2016-09-09';

    endDateTime: string = '2016-09-10';

    constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForHotel Page');
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
