import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {MinePage} from "../pages/mine/mine";
import {BillPage} from "../pages/bill/bill";

@NgModule({
    declarations: [
        MyApp,
        MinePage,
        BillPage,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BillPage,
        MinePage,
        HomePage,
        TabsPage
    ],
    providers: []
})
export class AppModule {
}
