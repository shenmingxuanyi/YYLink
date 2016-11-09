import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {BillFillTravelModel} from "../../../models/bill-fill-travel-model";
import {HttpResourceService} from "../../../providers/http-resource-service/http-resource-service";
import {RESTFUL_RESOURCE_ENDPOINT, RESTFUL_RESOURCES} from "../../../configs/resource.config";
import {RESPONSE_TYPE} from "../../../configs/http-resource.config";

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

    travelModel: BillFillTravelModel = new BillFillTravelModel();

    travelTypeList = [
        {icon: 'ios-car', name: '出租车', value: '出租车', iconStyle: {color: '#f53d3d'}},
        {icon: 'ios-subway', name: '公共交通', value: '公共交通', iconStyle: {color: '#03c0ff'}},
        {icon: 'ios-train', name: '火车', value: '火车', iconStyle: {color: '#2ec95c'}},
        {icon: 'ios-plane', name: '飞机', value: '飞机', iconStyle: {color: '#03c0ff'}},
        {icon: 'ios-bus', name: '长途巴士', value: '长途巴士', iconStyle: {color: 'mediumorchid'}},
        {icon: 'ios-car', name: '轮船', value: '轮船', iconStyle: {color: 'coral'}},
        {icon: 'ios-apps', name: '其他', value: '其他', iconStyle: {color: 'dodgerblue'}}
    ];

    moneyTypeList = [];

    moneyTypeListLoading = false;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public httpResourceService: HttpResourceService) {
        this.travelModel.travelDate = '2016-10-10';
        this.travelModel.travelWay = '出租车';
    }

    ionViewDidLoad() {
        this.moneyTypeListLoading = true;
        this.httpResourceService.post(RESTFUL_RESOURCE_ENDPOINT + RESTFUL_RESOURCES.NODE.QUERY_REF_ITEM, {reftype: '费用类型'}, null, false, true)
            .subscribe((data: any)=> {
                this.moneyTypeListLoading = false;
                if (RESPONSE_TYPE.SUCCESS == data.code) {
                    let infos = JSON.parse(data.information);
                    console.log(infos);
                    if (infos['费用类型'] && infos['费用类型']['reflist']) {
                        infos['费用类型']['reflist'].forEach((item)=> {
                            if (item.refname != '清空') {
                                this.moneyTypeList.push({
                                    name: item.refname,
                                    value: item.pk_ref
                                });
                            }
                        });
                    }
                    if (this.moneyTypeList.length > 0) {
                        this.travelModel.expensetype = this.moneyTypeList[0].value;
                    }
                } else {

                }
            }, (error)=> {
                this.moneyTypeListLoading = false;
            });
    }

    addressExchange() {
        let address = this.travelModel.fromCity;
        this.travelModel.fromCity = this.travelModel.toCity;
        this.travelModel.toCity = address;
    }

    saveBill() {

        console.log(this.travelModel)

        this.httpResourceService.post(RESTFUL_RESOURCE_ENDPOINT + RESTFUL_RESOURCES.HOME.NODE_TRAVEL.SAVE_TRAVEL_NODE, this.travelModel)
            .subscribe((data: any)=> {
                if (RESPONSE_TYPE.SUCCESS == data.code) {
                    let toast = this.toastCtrl.create({
                        message: '保存报帐信息成功',
                        duration: 3000
                    });
                    toast.present().then(()=> {
                        this.travelModel = new BillFillTravelModel();
                        this.travelModel.travelDate = '2016-10-10';
                        this.travelModel.travelWay = '出租车';
                    });
                }
            });

    }


}
