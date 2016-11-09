import {Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'dropdown',
    templateUrl: 'dropdown.html'
})
export class DropownComponent implements OnInit, OnChanges {

    @Input()
    type: string = 'list';

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
        this.updateViewValue();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value']) {
            if (!changes['value'].isFirstChange()) {
                if (changes['value'].previousValue != changes['value'].currentValue) {
                    this.updateViewValue()
                }
            }
        }
    }

    updateViewValue() {
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
        if (this.type == 'grid') {
            this.value = dataItem.value;
            this.ionChange(dataItem.value);
        }
    }

    ionChange = ($event)=> {
        this.valueChange.emit($event);
        this.onChange.emit($event);
    }

    split(dropdownList: Array<DropdownItem>) {
        let splitDropdownList = [];

        if (dropdownList && dropdownList.length > 0) {
            let splitIndex = [];
            for (let i = 0, n = dropdownList.length; i < n; i++) {
                splitIndex.push(dropdownList[i]);
                if ((i + 1) % 3 == 0 && i > 0) {
                    splitDropdownList.push(splitIndex);
                    splitIndex = [];
                }
            }
            if (splitIndex.length > 0) {
                splitDropdownList.push(splitIndex);
            }
        }
        return splitDropdownList;
    }

}

interface DropdownItem {
    name?: string;
    value?: any;
    icon?: string;
    color?: string,
    iconStyle?: string
}
