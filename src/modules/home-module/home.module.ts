/**
 * Created by zhaojunming on 16/11/3.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {HomePage} from "./home/home";


@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicModule.forRoot(HomePage)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        HomePage
    ],
    providers: []
})
export class HomeModule {
}
