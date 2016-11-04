import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {FillBillForTravelPage} from "../fill-bill-for-travel/fill-bill-for-travel";
import {FillBillForCommunicationPage} from "../fill-bill-for-communication/fill-bill-for-communication";
import {FillBillForHotelPage} from "../fill-bill-for-hotel/fill-bill-for-hotel";
import {FillBillForOtherPage} from "../fill-bill-for-other/fill-bill-for-other";
import {FillBillForPaymentPage} from "../fill-bill-for-payment/fill-bill-for-payment";
import {FillBillForPurchasePage} from "../fill-bill-for-purchase/fill-bill-for-purchase";
import {FillBillForReceivablesPage} from "../fill-bill-for-receivables/fill-bill-for-receivables";
import {FillBillForRestaurantPage} from "../fill-bill-for-restaurant/fill-bill-for-restaurant";
import {FillBillForSalePage} from "../fill-bill-for-sale/fill-bill-for-sale";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    fillBillForTravel = FillBillForTravelPage;
    fillBillForCommunication = FillBillForCommunicationPage;
    fillBillForHotel = FillBillForHotelPage;
    fillBillForOther = FillBillForOtherPage;
    fillBillForPayment = FillBillForPaymentPage;
    fillBillForPurchase = FillBillForPurchasePage;
    fillBillForReceivables = FillBillForReceivablesPage;
    fillBillForRestaurant = FillBillForRestaurantPage;
    fillBillForSale = FillBillForSalePage;

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
