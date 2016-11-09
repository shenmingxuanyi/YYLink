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
export class FillBillForTravelPage {

    travelType: string = '打车';
    travelTypeList = [
        {icon: 'ios-car', name: '打车', value: '打车', iconStyle: {color: '#f53d3d'}},
        {icon: 'ios-subway', name: '公交', value: '公交', iconStyle: {color: '#03c0ff'}},
        {icon: 'ios-train', name: '火车', value: '火车', iconStyle: {color: '#2ec95c'}},
        {icon: 'ios-plane', name: '飞机', value: '飞机', iconStyle: {color: '#03c0ff'}},
        {icon: 'ios-bus', name: '长途汽车', value: '长途汽车', iconStyle: {color: 'mediumorchid'}},
        {icon: 'ios-car', name: '轮船', value: '轮船', iconStyle: {color: 'coral'}},
        {icon: 'ios-apps', name: '其他', value: '其他', iconStyle: {color: 'dodgerblue'}}
    ]


    postTypeSelectFlag: boolean = false;

    startAddress: string;
    endAddress: string;

    postType = {
        icon: 'ios-car',
        name: '打车',
        color: '#f53d3d',
        value: '打车'
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
