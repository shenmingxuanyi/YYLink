/**
 * Created by zhaojunming on 16/11/3.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MinePage} from "../pages/mine/mine";
import {PLATFORMS_CONFIG_CONSTANT} from "../../../configs/platform.config";
import {ConsumptioAnalysis} from "../pages/consumptio-analysis/consumptio-analysis";
import {MyBills} from "../pages/my-bills/my-bills";
import {PersonInfo} from "../pages/person-info/person-info";
import {PersonalSetting} from "../pages/personal-setting/personal-setting";
import {ComplaintSuggest} from "../pages/complaint-suggest/complaint-suggest";
import {LabelManager} from "../pages/label-manager/label-manager";
import {BeginnerHelp} from "../pages/beginner-help/beginner-help";
import {OptionIntroduce} from "../pages/option-introduce/option-introduce";


//页面
const PAGES = [MinePage, PersonalSetting, PersonInfo, MyBills, ConsumptioAnalysis, OptionIntroduce, BeginnerHelp, LabelManager, ComplaintSuggest];
//组件
const COMPONENTS = [];
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
        IonicModule.forRoot(MinePage, PLATFORMS_CONFIG_CONSTANT),
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
export class MineModule {
}
