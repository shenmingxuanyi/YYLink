import {Component} from '@angular/core';
import {HomePage} from "../../modules/home-module/pages/home/home";
import {BillPage} from "../../modules/bill-module/pages/bill/bill";
import {MinePage} from "../../modules/mine-module/pages/mine/mine";


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    homeRoot: any = HomePage;
    billRoot: any = BillPage;
    mineRoot: any = MinePage;

    constructor() {

    }
}
