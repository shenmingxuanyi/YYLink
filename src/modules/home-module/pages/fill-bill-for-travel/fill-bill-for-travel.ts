import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

/*
 Generated class for the FillBillForTravel page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-fill-bill-for-travel',
    templateUrl: 'fill-bill-for-travel.html'
})
export class FillBillForTravel {

    postTypeSelectFlag: boolean = false;

    startAddress: string;
    endAddress: string;

    postType = {
        icon: 'ios-car',
        name: '打车',
        color: '#f53d3d'
    };

    dateTime: string = '2016-10-10'

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('Hello FillBillForTravel Page');
    }

    choicePostType(info) {
        this.postType = info;
        this.postTypeSelectFlag = false;
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

    addressExchange() {
        let address = this.startAddress;
        this.startAddress = this.endAddress;
        this.endAddress = address;
    }

}
