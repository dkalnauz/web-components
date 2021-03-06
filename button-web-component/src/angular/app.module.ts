import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Main as AppComponent } from './app.component.ts';

import '../button-web-component/button.web-component.ts';

enableProdMode();

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class MainModule {
}
