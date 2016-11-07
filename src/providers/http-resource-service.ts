import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, Response, RequestOptionsArgs, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import {Observable} from "rxjs";
import {LoadingController, ToastController, LoadingOptions, ToastOptions} from "ionic-angular";


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
}

@Injectable()
export class HttpResourceService {

    headers: Headers;

    searchParameters: URLSearchParams;


    private _loadingOptions: LoadingOptions;

    private _toastOptions: ToastOptions;

    constructor(public http: Http, private loadingController: LoadingController, private toastController: ToastController) {
        console.log('Constructor HttpResourceService Provider');
        this._loadingOptions = HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.LOADING_OPTIONS;
        this._toastOptions = HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.TOAST_OPTIONS;
    }

    request(url: string | Request, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {

        let loading = null;

        if (false != loadingOptions) {
            loading = this.loadingController.create(Object.assign({}, HTTP_RESOURCE_VIEW_CONFIG_CONSTANT.LOADING_OPTIONS, loadingOptions));
            loading.present();
        }

        return this.http.request(url, Object.assign({headers: this.headers, search: this.searchParameters}, options))
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

    get(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions, toastOptions?: ToastOptions): Observable<Response> {
        return this.request(new Request({method: RequestMethod.Get, url: url}), options, loadingOptions, toastOptions);
    }


    post(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({
            method: RequestMethod.Post,
            url: url
        }), Object.assign({body: body}, options), loadingOptions, toastOptions);
    }


    put(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({
            method: RequestMethod.Put,
            url: url
        }), Object.assign({body: body}, options), loadingOptions, toastOptions);

    }


    delete(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({
            method: RequestMethod.Delete,
            url: url
        }), options, loadingOptions, toastOptions);

    }


    patch(url: string, body: any, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({
            method: RequestMethod.Patch,
            url: url
        }), Object.assign({body: body}, options), loadingOptions, toastOptions);

    }


    head(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({method: RequestMethod.Head, url: url}), options, loadingOptions, toastOptions);
    }


    options(url: string, options?: RequestOptionsArgs, loadingOptions?: LoadingOptions|boolean, toastOptions?: ToastOptions|boolean): Observable<Response> {
        return this.request(new Request({
            method: RequestMethod.Options,
            url: url
        }), options, loadingOptions, toastOptions);

    }

}
