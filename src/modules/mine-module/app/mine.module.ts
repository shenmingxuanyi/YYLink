/**
 * Created by zhaojunming on 16/11/3.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MinePage} from "../pages/mine/mine";


@NgModule({
    declarations: [
        MinePage
    ],
    imports: [
        IonicModule.forRoot(MinePage)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MinePage
    ],
    providers: []
})
export class MineModule {
}
