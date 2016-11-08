/**
 * Created by zhaojunming on 16/10/28.
 */

//本地资源
export const STATIC_RESOURCES = {};

//静态本地资源点，用于调试
export const STATIC_RESTFUL_RESOURCE_ENDPOINT = './assets/restful/';

//远程资源点
export const RESTFUL_RESOURCE_ENDPOINT = 'http://10.1.76.36:8080/';

//资源集合
export const RESTFUL_RESOURCES = {
    SECURITY: {
        LOGIN: 'user/loginNormally',
        LOGOUT: 'user/logout',
        USER_INFO: 'user/userInfo',
        FORGET_PASSWORD: '',
        FORGET_PASSWORD_TO_SET_PASSWORD: '',
        REGISTER: '',
        REGISTER_TO_SET_INFORMATION: ''
    },
    HOME: {},
    BILL: {},
    SELF: {}

};