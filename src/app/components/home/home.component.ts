import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() searchable: boolean;
  @Input() parentArray: any = [];
  @Input() childArrayObj: any = {};
  @Input() selectedArr: any = [];
  type: any = '';
  dropdownList: any = [];
  marked = false;
  result: string;
  searchText: string;
  
  toggleVisibility(e){
    this.marked= e.target.checked;
    if (this.marked) {
      this.selectedArr = this.dropdownList.map(x => (Object.assign(x, { checked: true })));
    } else {
      this.result = '';
      this.selectedArr = [];
      this.dropdownList.map(x => (Object.assign(x, { checked: false })))
    }
  }

  ngOnInit() {
    this.type = 'Colors';
    this.onSelect();
  }

  onSelect() {
    const arr = this.childArrayObj[this.type.toLowerCase()];
    this.dropdownList = typeof arr[0] === 'object'
    ? arr.map(x => (Object.assign(x, { checked: false })))
    : arr.map(x => ({
      title: x,
      checked: false,
    }));
  }

  selectedItems(data) {
    if (data.checked) this.selectedArr.push(data);
    else if (!data.checked) {
      this.selectedArr = this.selectedArr.filter(x => ((x.title !== data.title) && !data.checked))
    }
  }

  show() {
    const arr = this.selectedArr.map(x => x.title);
    this.result = `${this.type} - ${arr.join(', ')}`;
  }
}
