import { Component } from '@angular/core';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USER-POST Web Application';

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Users', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/users']},
          {label: 'Posts', icon: 'fa fa-fw fa-calendar', routerLink: ['/posts']}
      ];
  }
}
