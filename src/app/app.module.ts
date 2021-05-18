import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ChildCompComponent],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule]
})
export class AppModule {}
