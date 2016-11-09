/**
 * Created by zhaojunming on 16/11/9.
 */

export class BillFillBaseModel {
    //金额
    money: number;
    //备注
    note: string;
    //标签
    tags: Array<any> = [];
    //影像系统类型
    imageSystemType: string;

    constructor() {
    }
}