import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';

/*
 Generated class for the Dropdown component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
    selector: 'dropdown',
    templateUrl: 'dropdown.html'
})

export class DropownComponent implements OnInit {

    @Input()
    dataList: Array<DropdownItem>;

    @Input()
    open: boolean = false;

    @Input()
    disabled: boolean = false;

    @Input()
    color: string = 'calm';

    @Input()
    selectColor: string = 'calm';

    @Input()
    value: any;

    @Output()
    valueChange = new EventEmitter();

    @Output()
    onChange = new EventEmitter<any>();

    @Output()
    onSelect = new EventEmitter<any>();

    viewValue: DropdownItem;

    constructor() {

    }

    ngOnInit() {
        if (this.dataList && this.dataList.length > 0) {
            if (!this.value) {

                this.value = this.dataList[0].value;
                this.viewValue = this.dataList[0];

            } else {
                this.dataList.forEach((value)=> {
                    if (this.value == value.value) {
                        this.viewValue = value;
                    }
                });
            }
        }
    }


    triggerDropdown = () => {
        this.open = !this.open;
    }

    ionSelect = ($event, dataItem)=> {
        this.viewValue = dataItem;
        this.open = false;
        this.onSelect.emit($event);

    }

    ionChange = ($event)=> {
        this.valueChange.emit($event);
        this.onChange.emit($event);
    }


}

interface DropdownItem {
    name?: string;
    value?: any;
    icon?: string;
}
