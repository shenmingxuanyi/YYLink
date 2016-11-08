import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Platform, Nav, Events} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/security/login/login";
import {SYSTEM_EVENTS} from "../configs/event.config";


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp implements OnInit,OnDestroy {

    @ViewChild(Nav) nav: Nav;

    rootPage = TabsPage;

    constructor(platform: Platform, public events: Events) {

        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    ngOnInit() {

        this.events.subscribe(SYSTEM_EVENTS.SECURITY.LOGIN, (userTokenInfo)=> {
            this.rootPage = TabsPage;
        });

        this.events.subscribe(SYSTEM_EVENTS.SECURITY.LOGOUT, (userTokenInfo)=> {
            this.rootPage = LoginPage;
        });

    }

    ngOnDestroy() {
        this.events.unsubscribe(SYSTEM_EVENTS.SECURITY.LOGIN);
        this.events.unsubscribe(SYSTEM_EVENTS.SECURITY.LOGOUT);
    }


}
