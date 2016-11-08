import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
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

    userInfo: any;

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
            .httpUIPoxy(this.http.post(RESTFUL_RESOURCE_ENDPOINT + RESTFUL_RESOURCES.SECURITY.LOGIN, parameters, {
                headers: new Headers({
                    'Accept': 'application/json',
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": RESTFUL_RESOURCE_ENDPOINT
                })
            }))
            .map((data: any)=> {
                if (RESPONSE_TYPE.SUCCESS == data['code']) {
                    this.setUserInfo(Object.assign({}, this.userInfo, {phone: phone}));

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

    logout() {
        this.events.publish(SYSTEM_EVENTS.SECURITY.LOGOUT, null);
    }

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
        this.storage.set(LOCAL_STORAGE_KEY.USER.USER_INFO, userInfo);
    }

    getUserInfo(): Promise<any> {
        if (this.userInfo && this.userInfo.phone) {
            return Promise.resolve(this.userInfo);
        } else {
            return this.storage.get(LOCAL_STORAGE_KEY.USER.USER_INFO).then((userInfo)=> {
                this.userInfo = userInfo;
                return userInfo;
            });
        }
    }

    getUserTokenInfo(): Promise<any> {
        if (this.userTokenInfo) {
            return Promise.resolve(this.userTokenInfo)
        } else {
            if (this.userInfo['phone']) {
                return this.storage.get(this.userInfo['phone'] + ":" + LOCAL_STORAGE_KEY.USER.USER_TOKEN_INFO)
                    .then((userTokenInfo)=> {
                        this.userTokenInfo = userTokenInfo;
                        return userTokenInfo;
                    });
            }
        }
        return Promise.resolve(null);
    }

    setUserTokenInfo(userTokenInfo: any) {
        this.userTokenInfo = userTokenInfo;
        this.storage.set(this.userInfo['phone'] + ":" + LOCAL_STORAGE_KEY.USER.USER_TOKEN_INFO, userTokenInfo);
    }


}
