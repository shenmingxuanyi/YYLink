import {Component} from '@angular/core';
import {HomePage} from "../home/home/home";
import {BillPage} from "../bill/bill/bill";
import {MinePage} from "../mine/mine/mine";


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
