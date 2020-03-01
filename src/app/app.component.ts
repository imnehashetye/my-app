import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  searchable: any = true;
  parentArray: any = ['Colors', 'Components'];
  childArrayObj: any = {
    colors: ['Red', 'Blue', 'Yellow', 'White', 'Black', 'Green', 'Orange'],
    components: [{ title: 'hii' }, { title: 'bye' }, { title: 'head' }, { title: 'desk'}, { title: 'tree'}],
  };
  selectedArr: any = [];

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }
}
