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
        FORGET_PASSWORD_SEND_MESSAGE_CODE: 'user/sendMsg',
        FORGET_PASSWORD_VALID_MESSAGE_CODE: 'user/validMsgCode',
        REGISTER: '',
        REGISTER_TO_SET_INFORMATION: ''
    },
    HOME: {
        NODE_TRAVEL: {
            SAVE_TRAVEL_NODE: 'nodeTravel/saveTravelNode',
            UPDATE_TRAVEL_NODE: 'nodeTravel/updateTravelNode'
        },
        NODE_HOTEL: {
            SAVE_HOTEL_NODE: 'nodeHotel/saveHotelNode',
            UPDATE_HOTEL_NODE: 'nodeHotel/updateHotelNode'
        },
        NODE_EATING: {
            SAVE_EATING_NODE: 'nodeEating/saveEatingNode',
            UPDATE_EATING_NODE: 'nodeEating/updateEatingNode'
        },
        NODE_GATHER: {
            SAVE_GATHER_NODE: 'nodeGather/saveGatherNode',
            UPDATE_GATHER_NODE: 'nodeGather/updateGatherNode'
        },
        NODE_SALE: {
            SAVE_SALE_NODE: 'nodeSale/saveSaleNode',
            UPDATE_SALE_NODE: 'nodeSale/updateSaleNode'
        },
        NODE_COMMUNICATE: {
            SAVE_COMMUNICATE_NODE: 'nodeCommunicate/saveCommunicateNode',
            UPDATE_COMMUNICATE_NODE: 'nodeCommunicate/updateCommunicateNode'
        },
        NODE_PAY: {
            SAVE_PAY_NODE: 'nodePay/savePayNode',
            UPDATE_PAY_NODE: 'nodePay/updatePayNode'
        },
        NODE_BUY: {
            SAVE_BUY_NODE: 'nodeBuy/saveBuyNode',
            UPDATE_BUY_NODE: 'nodeBuy/updateBuyNode'
        },
        NODE_OTHER: {
            SAVE_OTHER_NODE: 'nodeOther/saveOtherNode',
            UPDATE_OTHER_NODE: 'nodeOther/updateOtherNode'
        }

    },
    BILL: {},
    NODE: {
        GET_NODES_BY_TAG: 'node/getNodesByTag',
        GET_NODES_BY_DATE: 'node/getNodesByDate',
        GET_NODES_BETWEEN_DATE: 'node/getNodesBetweenDate',
        QUERY_REF_ITEM: 'node/queryRefItem'

    },
    SELF: {}

};