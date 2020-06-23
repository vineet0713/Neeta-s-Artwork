import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';

import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './items/item-list/item-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }