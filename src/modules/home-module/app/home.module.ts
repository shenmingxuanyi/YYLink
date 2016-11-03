/**
 * Created by zhaojunming on 16/11/3.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {HomePage} from "../pages/home/home";
import {FillBillForTravel} from "../pages/fill-bill-for-travel/fill-bill-for-travel";
import {FillBillForCommunication} from "../pages/fill-bill-for-communication/fill-bill-for-communication";
import {FillBillForHotel} from "../pages/fill-bill-for-hotel/fill-bill-for-hotel";
import {FillBillForOther} from "../pages/fill-bill-for-other/fill-bill-for-other";
import {FillBillForPayment} from "../pages/fill-bill-for-payment/fill-bill-for-payment";
import {FillBillForPurchase} from "../pages/fill-bill-for-purchase/fill-bill-for-purchase";
import {FillBillForReceivables} from "../pages/fill-bill-for-receivables/fill-bill-for-receivables";
import {FillBillForRestaurant} from "../pages/fill-bill-for-restaurant/fill-bill-for-restaurant";
import {FillBillForSale} from "../pages/fill-bill-for-sale/fill-bill-for-sale";
import {DropownComponent} from "../../../components/dropdown/dropdown";
import {PLATFORMS_CONFIG_CONSTANT} from "../../../configs/platform.config";


//页面
const PAGES = [HomePage, FillBillForTravel, FillBillForCommunication, FillBillForHotel, FillBillForOther, FillBillForPayment, FillBillForPurchase, FillBillForReceivables, FillBillForRestaurant, FillBillForSale,];
//组件
const COMPONENTS = [DropownComponent];
//指令
const DIRECTIVES = [];
//管道
const PIPES = [];
//服务
const PROVIDERS = [];
//模块
const MODULES = [];


@NgModule({
    declarations: [
        ...PAGES,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ],
    imports: [
        IonicModule.forRoot(HomePage, PLATFORMS_CONFIG_CONSTANT),
        ...MODULES
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...PAGES,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ],
    providers: [...PROVIDERS]
})
export class HomeModule {
}
