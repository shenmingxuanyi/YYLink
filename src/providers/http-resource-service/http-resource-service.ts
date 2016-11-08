import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, Response, RequestOptionsArgs, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import {Observable} from "rxjs";
import {LoadingController, ToastController, LoadingOptions, ToastOptions} from "ionic-angular";
import {RESTFUL_RESOURCE_ENDPOINT} from "../../configs/resource.config";


export const HTTP_RESOURCE_VIEW_CONFIG_CONSTANT = {
    LOADING_OPTIONS: {
        spinner: null,
        content: "请稍后...",
        cssClass: null,
        showBackdrop: null,
        dismissOnPageChange: null,
        delay: null,
        duration: null
    },
    TOAST_OPTIONS: {
        message: "请求出现了错误",
        cssClass: null,
        duration: 3000,
        showCloseButton: null,
        closeButtonText: null,
        dismissOnPageChange: null,
        position: 'bottom'
    }
};

@Injectable()
export class HttpResourceService {

    requestOptionsArgs: RequestOptionsArgs = {
        search: new URLSearchParams("phone=15311621031&token=XXXX-XXXX-XXXX"),
        headers: new Headers({
            'Accept': 'application/json',
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": RESTFUL_RESOURCE_ENDPOINT
        })
    };

    loadingOptions: LoadingOptions;

    toastOptions: ToastOptions;

    constructor(public http: Http, private loadingController: LoadingController, private toastController: ToastController) {
        console.log('Constructor HttpResourceService Provider');
        this.loadingOptions = HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.LOADING_OPTIONS;
        this.toastOptions = HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.TOAST_OPTIONS;
    }

    httpUIPoxy(observable: Observable<Response>, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {

        let loading = null;

        if (false != loadingOptions) {
            loading = this.loadingController.create(Object.assign({}, HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.LOADING_OPTIONS, loadingOptions));
            loading.present();
        }

        return observable
            .map((response)=> {
                let responseJson = response.json();
                if ('0' != responseJson['code']) {
                    this.toastController.create(Object.assign({}, HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.TOAST_OPTIONS, {message: responseJson['information'] || '请求出现了错误'}, toastOptions)).present();
                }
                return responseJson;
            })
            .catch((error)=> {
                if (false != loadingOptions) {
                    if (loading) {
                        loading.dismiss();
                    }
                }
                this.toastController.create(Object.assign({}, HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.TOAST_OPTIONS, {message: null != error ? JSON.stringify(error) : '请求出现了错误'}, toastOptions)).present();
                return Observable.throw(error);
            })
            .finally(()=> {
                if (false != loadingOptions) {
                    if (loading) {
                        loading.dismiss();
                    }
                }
            });
    }

    request(url: string | Request, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {

        return this.httpUIPoxy(this.http.request(url, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);

    }

    get(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions, toastOptions?: ToastOptions): Observable<Response> {
        return this.httpUIPoxy(this.http.get(url, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }


    post(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.post(url, body, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }


    put(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.put(url, body, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);

    }


    delete(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.delete(url, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }


    patch(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.patch(url, body, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }


    head(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.head(url, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }


    options(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.httpUIPoxy(this.http.options(url, Object.assign({}, this.requestOptionsArgs, options)), loadingOptions, toastOptions);
    }

}
