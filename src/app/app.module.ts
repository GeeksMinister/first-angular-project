import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputPsKwComponent } from './input-ps-kw/input-ps-kw.component';
import { TestComponent } from './test/test.component'


@NgModule({
  declarations: [
    AppComponent,
    InputPsKwComponent,
    TestComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
