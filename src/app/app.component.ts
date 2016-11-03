import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage = TabsPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
