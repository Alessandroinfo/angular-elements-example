import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

export interface tab {
  label: string,
  active: boolean
}

@Component({
  selector: 'app-tabs-new-way',
  templateUrl: './tabs-new-way.component.html',
  styleUrls: ['./tabs-new-way.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TabsNewWayComponent {
  _tabs: tab[] = [{label: 'First', active: true}, {label: 'Second', active: false}];
  @Input()
  get tabs(): tab[] {
    return this._tabs;
  }

  set tabs(tabs: any) {
    console.log(tabs, typeof tabs);
    if (typeof tabs == "string") {
      this._tabs = JSON.parse(tabs);
    } else {
      this._tabs = tabs;
    }
  }

  setActive(index: number) {
    this._tabs.forEach((tab, i) => {
      this._tabs[i].active = index === i;
    })
  }
}
