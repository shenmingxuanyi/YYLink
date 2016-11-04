import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {BillViewFilterPopover} from "../bill-view-filter-popover/bill-view-filter-popover";

/*
 Generated class for the Bill page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-bill',
    templateUrl: 'bill.html'
})
export class BillPage {


    filterDate: string = "2016-10";

    billViewFilterType: string = 'date';

    billDataListOfDateType = [
        {
            date: "2016-12-12 星期四",
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1600",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1500",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1500",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        },
        {
            date: "2016-12-11 星期三",
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1600",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1500",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1500",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        },
        {
            date: "2016-12-10 星期二",
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1600",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1500",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1500",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        },
        {
            date: "2016-12-09 星期一",
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1600",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1500",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1500",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        },
        {
            date: "2016-12-09 星期一",
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1600",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1500",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1500",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        }

    ];

    billDataListOfLabelType = [
        {
            type: '用户调研',
            date: "2016-12-01 至 2017-01-01",
            position: '北京，云南',
            amount: '$6,800.00',
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1,600.00",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950.00",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1,500.00",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1,500.00",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        },
        {
            type: '用户调研',
            date: "2016-12-01 至 2017-01-01",
            position: '北京，云南',
            amount: '$6,800.00',
            list: [
                {
                    type: "飞机",
                    info: "上海－北京",
                    amount: "$1,600.00",
                    icon: 'ios-plane-outline',
                    badges: ['重要', '临时']
                },
                {
                    type: "住宿",
                    info: "如家酒店 4晚",
                    amount: "$950.00",
                    icon: 'ios-home-outline',
                    badges: ['重要']
                },
                {
                    type: "餐饮",
                    info: "团建",
                    amount: "$1,500.00",
                    icon: 'ios-pizza-outline',
                    badges: ['临时']
                },
                {
                    type: "通讯",
                    info: "季度通讯费用",
                    amount: "$1,500.00",
                    icon: 'ios-phone-portrait-outline',
                    badges: ['重要', '临时']
                }
            ]
        }
    ];

    constructor(public navCtrl: NavController, public popoverController: PopoverController) {
    }

    ionViewDidLoad() {
        console.log('Hello Bill Page');
    }


    deleteBillOfDate(i: number, j: number) {
        this.billDataListOfDateType[i].list.splice(j, 1);
    }

    deleteBillOfLabel(i: number, j: number) {
        console.log(i + "," + j);
        this.billDataListOfLabelType[i].list.splice(j, 1);
    }

    deleteAllBillOfLabel(i) {
        this.billDataListOfLabelType.splice(i, 1);
    }

    doInfiniteOfFilterDate($event) {
        console.log('Begin async operation');

        setTimeout(() => {
            for (var i = 0; i < 5; i++) {
                this.billDataListOfDateType.push({
                    date: "2016-12-09 星期一",
                    list: [
                        {
                            type: "飞机",
                            info: "上海－北京",
                            amount: "$1600",
                            icon: 'ios-plane-outline',
                            badges: ['重要', '临时']
                        },
                        {
                            type: "住宿",
                            info: "如家酒店 4晚",
                            amount: "$950",
                            icon: 'ios-home-outline',
                            badges: ['重要']
                        },
                        {
                            type: "餐饮",
                            info: "团建",
                            amount: "$1500",
                            icon: 'ios-pizza-outline',
                            badges: ['临时']
                        },
                        {
                            type: "通讯",
                            info: "季度通讯费用",
                            amount: "$1500",
                            icon: 'ios-phone-portrait-outline',
                            badges: ['重要', '临时']
                        }
                    ]
                });
            }

            console.log('Async operation has ended');

            $event.complete();
        }, 500);
    }

    doInfiniteOfFilterLabel($event) {
        console.log('Begin async operation');

        setTimeout(() => {
            for (var i = 0; i < 5; i++) {
                this.billDataListOfLabelType.push({
                    type: '用户调研',
                    date: "2016-12-01 至 2017-01-01",
                    position: '北京，云南',
                    amount: '$6,800.00',
                    list: [
                        {
                            type: "飞机",
                            info: "上海－北京",
                            amount: "$1,600.00",
                            icon: 'ios-plane-outline',
                            badges: ['重要', '临时']
                        },
                        {
                            type: "住宿",
                            info: "如家酒店 4晚",
                            amount: "$950.00",
                            icon: 'ios-home-outline',
                            badges: ['重要']
                        },
                        {
                            type: "餐饮",
                            info: "团建",
                            amount: "$1,500.00",
                            icon: 'ios-pizza-outline',
                            badges: ['临时']
                        },
                        {
                            type: "通讯",
                            info: "季度通讯费用",
                            amount: "$1,500.00",
                            icon: 'ios-phone-portrait-outline',
                            badges: ['重要', '临时']
                        }
                    ]
                });
            }

            console.log('Async operation has ended');

            $event.complete();
        }, 500);
    }

    doRefreshOfDateType($event) {
        console.log('Begin async operation', $event);

        setTimeout(() => {
            console.log('Async operation has ended');
            $event.complete();
        }, 2000);

    }

    openDataTime(datetime: any) {

        datetime.open();

    }

    showBillViewFilterPopover($event) {

        let popover = this.popoverController.create(BillViewFilterPopover, {billViewFilterType: this.billViewFilterType});

        popover.present({
            ev: $event
        });

        popover.onDidDismiss((data)=> {
            if (data && data.billViewFilterType) {
                this.billViewFilterType = data.billViewFilterType;
            }
            console.log(data);
        });

    }

}
