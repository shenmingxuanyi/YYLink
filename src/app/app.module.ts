import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {BillModule} from "../modules/bill-module/bill.module";
import {MineModule} from "../modules/mine-module/mine.module";
import {HomeModule} from "../modules/home-module/home.module";


@NgModule({
    declarations: [
        MyApp,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BillModule,
        MineModule,
        HomeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage
    ],
    providers: []
})
export class AppModule {
}
