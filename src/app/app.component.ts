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
                                this.queryUserInfo();
                            } else {
                                this.nav.setRoot(LoginPage);
                            }
                        })
                        .catch(()=> {
                            this.nav.setRoot(LoginPage);
                        })
                } else {
                    this.nav.setRoot(LoginPage);
                }
            })
            .catch(()=> {
                this.nav.setRoot(LoginPage);
            })
    }

    private queryUserInfo() {
        this.userService.queryUserInfo()
            .subscribe((data: any)=> {
                if (RESPONSE_TYPE.SUCCESS == data.code) {
                    console.log(data);
                } else {
                    this.nav.setRoot(LoginPage);
                }
            }, ()=> {
                this.nav.setRoot(LoginPage);
            });
    }

    ngOnInit() {

        this.events.subscribe(SYSTEM_EVENTS.SECURITY.LOGIN, (userTokenInfo)=> {
            this.queryUserInfo();
            this.nav.setRoot(TabsPage);
        });

        this.events.subscribe(SYSTEM_EVENTS.SECURITY.LOGOUT, (userTokenInfo)=> {
            this.nav.setRoot(LoginPage);
        });

    }


    ngOnDestroy() {
        this.events.unsubscribe(SYSTEM_EVENTS.SECURITY.LOGIN);
        this.events.unsubscribe(SYSTEM_EVENTS.SECURITY.LOGOUT);
    }


}
