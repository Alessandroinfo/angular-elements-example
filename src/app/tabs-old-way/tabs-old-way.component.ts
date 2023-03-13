import {Component, Input} from '@angular/core';

export interface tab {
  label: string,
  active: boolean
}

@Component({
  selector: 'app-tabs-old-way',
  templateUrl: './tabs-old-way.component.html',
  styleUrls: ['./tabs-old-way.component.scss'],
})
export class TabsOldWayComponent {
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
