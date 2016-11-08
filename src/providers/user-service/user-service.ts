import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {RSA_PUBLIC_KEY} from "../../configs/security.config";
import {RESTFUL_RESOURCES, RESTFUL_RESOURCE_ENDPOINT} from "../../configs/resource.config";
import {HttpResourceService} from "../http-resource-service/http-resource-service";
import {RESPONSE_TYPE} from "../../configs/http-resource.config";
import {Storage} from '@ionic/storage';
import {Events} from "ionic-angular";
import {SYSTEM_EVENTS} from "../../configs/event.config";
import {Observable} from "rxjs";
import {LOCAL_STORAGE_KEY} from "../../configs/stroage.config";


declare var JSEncrypt: any;

@Injectable()
export class UserService {


    userTokenInfo: {
        cookie: null,
        accessInfo: null
    }

    currentUserInfo = {
        phone: null
    }

    constructor(public http: Http, public httpResourceService: HttpResourceService, public events: Events, public storage: Storage) {
        console.log('Constructor UserService Provider');
    }

    login(phone: string, password: string): Observable<Response> {

        let encrypt = new JSEncrypt();
        encrypt.setPublicKey(RSA_PUBLIC_KEY);

        let parameters = {
            phone: phone,
            password: encrypt.encrypt(password)
        };

        return this.httpResourceService
            .httpUIPoxy(this.http.post(RESTFUL_RESOURCE_ENDPOINT + RESTFUL_RESOURCES.SECURITY.LOGIN, parameters))
            .map((data: any)=> {
                if (RESPONSE_TYPE.SUCCESS == data['code']) {
                    this.currentUserInfo['phone'] = phone;
                    let tokenInfo = {
                        cookie: data['cookie'],
                        accessInfo: {accessToken: data['accessToken'], association: data['association']}
                    };

                    this.setUserTokenInfo(tokenInfo);

                    this.events.publish(SYSTEM_EVENTS.SECURITY.LOGIN, tokenInfo);
                }
                return data;
            });
    }

    getUserTokenInfo(): Promise<any> {
        if (this.userTokenInfo) {
            Promise.resolve(this.userTokenInfo)
        } else {
            if (this.currentUserInfo['phone']) {
                return this.storage.get(this.currentUserInfo['phone'] + ":" + LOCAL_STORAGE_KEY.USER.USER_TOKEN_INFO);
            }
        }
        return Promise.resolve(null);
    }

    setUserTokenInfo(userTokenInfo: any) {
        this.userTokenInfo = userTokenInfo;
        this.storage.set(this.currentUserInfo['phone'] + ":" + LOCAL_STORAGE_KEY.USER.USER_TOKEN_INFO, userTokenInfo);
    }

}
