import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Main } from './main.component.ts';

enableProdMode();

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
  declarations: [
    Main
  ],
  bootstrap: [Main]
})
export default class MainModule {
}
