import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {BillModule} from "../modules/bill-module/app/bill.module";
import {MineModule} from "../modules/mine-module/app/mine.module";
import {HomeModule} from "../modules/home-module/app/home.module";
import {PLATFORMS_CONFIG_CONSTANT} from "../configs/platform.config";
import {DEEP_LINK_CONFIG} from "../configs/deep-linker.config";

//页面
const PAGES = [MyApp, TabsPage];
//管道
const PIPES = [];
//组件
const COMPONENTS = [];
//指令
const DIRECTIVES = [];
//服务
const PROVIDERS = [];

const MODULES = [BillModule, MineModule, HomeModule];

@NgModule({
    declarations: [
        ...PAGES,
        ...DIRECTIVES,
        ...COMPONENTS,
        ...PIPES
    ],
    imports: [
        IonicModule.forRoot(MyApp, PLATFORMS_CONFIG_CONSTANT, DEEP_LINK_CONFIG),
        ...MODULES,

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...PAGES,
        ...DIRECTIVES,
        ...COMPONENTS,
        ...PIPES
    ],
    providers: [...PROVIDERS]
})
export class AppModule {
}
