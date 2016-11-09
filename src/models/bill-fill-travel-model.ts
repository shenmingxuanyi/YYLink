import {BillFillBaseModel} from "./bill-fill-base-model";
/**
 * Created by zhaojunming on 16/11/9.
 */

export class BillFillTravelModel extends BillFillBaseModel {

    fromCity: string;
    toCity: string;
    travelDate: string;
    travelWay: string;
    expensetype: string;

    constructor() {
        super();
    }
}