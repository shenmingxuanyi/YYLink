import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {PLATFORMS_CONFIG_CONSTANT} from "../configs/platform.config";
import {DEEP_LINK_CONFIG} from "../configs/deep-linker.config";
import {FillBillForTravelPage} from "../pages/home/fill-bill-for-travel/fill-bill-for-travel";
import {HomePage} from "../pages/home/home/home";
import {FillBillForCommunicationPage} from "../pages/home/fill-bill-for-communication/fill-bill-for-communication";
import {FillBillForHotelPage} from "../pages/home/fill-bill-for-hotel/fill-bill-for-hotel";
import {FillBillForOtherPage} from "../pages/home/fill-bill-for-other/fill-bill-for-other";
import {FillBillForPaymentPage} from "../pages/home/fill-bill-for-payment/fill-bill-for-payment";
import {FillBillForPurchasePage} from "../pages/home/fill-bill-for-purchase/fill-bill-for-purchase";
import {FillBillForReceivablesPage} from "../pages/home/fill-bill-for-receivables/fill-bill-for-receivables";
import {FillBillForRestaurantPage} from "../pages/home/fill-bill-for-restaurant/fill-bill-for-restaurant";
import {FillBillForSalePage} from "../pages/home/fill-bill-for-sale/fill-bill-for-sale";
import {DropownComponent} from "../components/dropdown/dropdown";
import {BillPage} from "../pages/bill/bill/bill";
import {PersonInfoPage} from "../pages/mine/person-info/person-info";
import {MinePage} from "../pages/mine/mine/mine";
import {PersonalSettingPage} from "../pages/mine/personal-setting/personal-setting/personal-setting";
import {MyBillsPage} from "../pages/mine/main/my-bills/my-bills";
import {ConsumptioAnalysisPage} from "../pages/mine/main/consumptio-analysis/consumptio-analysis";
import {OptionIntroducePage} from "../pages/mine/personal-setting/option-introduce/option-introduce";
import {BeginnerHelpPage} from "../pages/mine/personal-setting/beginner-help/beginner-help";
import {LabelManagerPage} from "../pages/mine/personal-setting/label-manager/label-manager";
import {ComplaintSuggestPage} from "../pages/mine/personal-setting/complaint-suggest/complaint-suggest";
import {BillViewFilterPopover} from "../pages/bill/bill-view-filter-popover/bill-view-filter-popover";
import {RegisterForSetPasswordPage} from "../pages/security/register-for-set-password/register-for-set-password";
import {ForgetPasswordForSetPasswordPage} from "../pages/security/forget-password-for-set-password/forget-password-for-set-password";
import {ForgetPasswordPage} from "../pages/security/forget-password/forget-password";
import {RegisterPage} from "../pages/security/register/register";
import {LoginPage} from "../pages/security/login/login";
import {HttpResourceService} from "../providers/http-resource-service/http-resource-service";

//安全－页面
const SECURITY_PAGE = [LoginPage, RegisterPage, ForgetPasswordPage, ForgetPasswordForSetPasswordPage, RegisterForSetPasswordPage];
//首页－页面
const HOME_PAGES = [HomePage, FillBillForTravelPage, FillBillForCommunicationPage, FillBillForHotelPage, FillBillForOtherPage, FillBillForPaymentPage, FillBillForPurchasePage, FillBillForReceivablesPage, FillBillForRestaurantPage, FillBillForSalePage];
//报帐－页面
const BILL_PAGES = [BillPage, BillViewFilterPopover];
//我的－页面
const MINE_PAGES = [MinePage, PersonalSettingPage, PersonInfoPage, MyBillsPage, ConsumptioAnalysisPage, OptionIntroducePage, BeginnerHelpPage, LabelManagerPage, ComplaintSuggestPage];

//页面
const PAGES = [TabsPage, ...HOME_PAGES, ...BILL_PAGES, ...MINE_PAGES, ...SECURITY_PAGE];
//管道
const PIPES = [];
//组件
const COMPONENTS = [DropownComponent];
//指令
const DIRECTIVES = [];
//服务
const PROVIDERS = [HttpResourceService];

const MODULES = [];

@NgModule({
    declarations: [
        MyApp,
        ...PAGES,
        ...DIRECTIVES,
        ...COMPONENTS,
        ...PIPES
    ],
    imports: [
        IonicModule.forRoot(MyApp, PLATFORMS_CONFIG_CONSTANT, DEEP_LINK_CONFIG),
        ...MODULES
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ...PAGES,
        ...DIRECTIVES,
        ...COMPONENTS,
        ...PIPES
    ],
    providers: [...PROVIDERS]
})
export class AppModule {
}
