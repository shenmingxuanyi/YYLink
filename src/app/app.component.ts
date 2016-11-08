import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Platform, Nav, Events} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/security/login/login";
import {SYSTEM_EVENTS} from "../configs/event.config";
import {UserService} from "../providers/user-service/user-service";
import {RESPONSE_TYPE} from "../configs/http-resource.config";


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp implements OnInit,OnDestroy {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = TabsPage;

    constructor(platform: Platform, public events: Events, public userService: UserService) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
            this.initialize();
        });
    }


    initialize() {
        this.userService.getUserInfo()
            .then(userInfo=> {
                if (userInfo) {
                    this.userService.getUserTokenInfo()
                        .then(userTokenInfo=> {
                            if (userTokenInfo) {
                                this.userService.setHttpAuthority(userTokenInfo);
                                this.userService.queryUserInfo()
                                    .subscribe((data: any)=> {
                                        if (RESPONSE_TYPE.SUCCESS == data.code) {

                                        } else {
                                            this.rootPage = LoginPage;
                                        }
                                    }, ()=> {
                                        this.rootPage = LoginPage;
                                    });
                            } else {
                                this.rootPage = LoginPage;
                            }
                        })
                        .catch(()=> {
                            this.rootPage = LoginPage;
                        })
                } else {
                    this.rootPage = LoginPage;
                }
            })
            .catch(()=> {
                this.rootPage = LoginPage;
            })
    }

    ngOnInit() {
        console.log("ngOnInit")

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
