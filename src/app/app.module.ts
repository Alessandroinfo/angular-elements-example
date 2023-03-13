import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabsOldWayModule} from './tabs-old-way/tabs-old-way.module';

import {createCustomElement} from '@angular/elements';
import {TabsOldWayComponent} from './tabs-old-way/tabs-old-way.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    TabsOldWayModule

  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {

    const tabsOld = createCustomElement(
      TabsOldWayComponent,
      {injector: this.injector}
    );
    customElements.define('tabs-old', tabsOld);


  }
}
