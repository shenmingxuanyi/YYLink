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
        FORGET_PASSWORD_SEND_MESSAGE_CODE: '/user/sendMsg',
        FORGET_PASSWORD_VALID_MESSAGE_CODE: '/user/validMsgCode',
        REGISTER: '',
        REGISTER_TO_SET_INFORMATION: ''
    },
    HOME: {
        NODE_TRAVEL: {
            SAVE_TRAVEL_NODE: 'nodeTravel/saveTravelNode'
        },
        NODE_HOTEL: {
            SAVE_HOTEL_NODE: 'nodeHotel/saveHotelNode'
        },
        NODE_EATING: {
            SAVE_EATING_NODE: '/nodeEating/saveEatingNode'
        }
    },
    BILL: {
        GET_NODES_BY_TAG: '/node/getNodesByTag',
        GET_NODES_BY_DATE: '/node/getNodesByDate',
        GET_NODES_BETWEEN_DATE: '/node/getNodesBetweenDate'
    },
    SELF: {}

};