import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {createApplication} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {TabsNewWayComponent} from './app/tabs-new-way/tabs-new-way.component';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

// --------------------------------------------------------
// PR: https://github.com/angular/angular/pull/46475
// get a hand on the `ApplicationRef` to access its injector
createApplication({providers: []})
  .then((appRef) => {
    // create a constructor of a custom element
    const tabsNew = createCustomElement(TabsNewWayComponent,
      {injector: appRef.injector});

    // register in a browser
    customElements.define('tabs-new', tabsNew);
  });
