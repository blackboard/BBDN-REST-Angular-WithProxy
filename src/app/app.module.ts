import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent, NewUserFormComponent]
})
export class AppModule { }
