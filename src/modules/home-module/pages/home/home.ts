import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {FillBillForTravel} from "../fill-bill-for-travel/fill-bill-for-travel";
import {FillBillForCommunication} from "../fill-bill-for-communication/fill-bill-for-communication";
import {FillBillForHotel} from "../fill-bill-for-hotel/fill-bill-for-hotel";
import {FillBillForOther} from "../fill-bill-for-other/fill-bill-for-other";
import {FillBillForPayment} from "../fill-bill-for-payment/fill-bill-for-payment";
import {FillBillForPurchase} from "../fill-bill-for-purchase/fill-bill-for-purchase";
import {FillBillForReceivables} from "../fill-bill-for-receivables/fill-bill-for-receivables";
import {FillBillForRestaurant} from "../fill-bill-for-restaurant/fill-bill-for-restaurant";
import {FillBillForSale} from "../fill-bill-for-sale/fill-bill-for-sale";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    fillBillForTravel = FillBillForTravel;
    fillBillForCommunication = FillBillForCommunication;
    fillBillForHotel = FillBillForHotel;
    fillBillForOther = FillBillForOther;
    fillBillForPayment = FillBillForPayment;
    fillBillForPurchase = FillBillForPurchase;
    fillBillForReceivables = FillBillForReceivables;
    fillBillForRestaurant = FillBillForRestaurant;
    fillBillForSale = FillBillForSale;

    slidesOptions = {pager: true, loop: true, autoplay: 3000};

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        console.log('Hello Mine Page');
    }

    goToView(page) {
        this.navCtrl.parent.parent.push(page);
    }

}
