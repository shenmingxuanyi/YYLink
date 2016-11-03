/**
 * Created by zhaojunming on 16/11/3.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {BillPage} from "./bill/bill";


@NgModule({
    declarations: [
        BillPage
    ],
    imports: [
        IonicModule.forRoot(BillPage)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        BillPage
    ],
    providers: []
})
export class BillModule {
}
