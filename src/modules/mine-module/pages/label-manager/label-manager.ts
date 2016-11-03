import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

/*
 Generated class for the LabelManager page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-label-manager',
    templateUrl: 'label-manager.html'
})
export class LabelManager {

    labelList: Array<string> = ['中国石油', '商务谈判', '出差', 'Developer Group', '项目需求'];


    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('Hello LabelManager Page');
    }

    deleteLabel(label: string) {
        if (this.labelList.indexOf(label) >= 0) {
            this.labelList.splice(this.labelList.indexOf(label), 1);
        }
    }


    inputLabel() {
        let prompt = this.alertCtrl.create({
            title: '添加标签',
            message: "添加标签可以是您更好分类报帐信息",
            inputs: [
                {
                    name: 'label',
                    placeholder: '请输入标签'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '保存',
                    handler: data => {
                        this.addLabel(data.label)
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    addLabel(label: string) {
        if (label && this.labelList.indexOf(label) < 0) {
            this.labelList.push(label);
        }
    }

}
