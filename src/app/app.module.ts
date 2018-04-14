import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    PostItemComponent
  ]
})
export class AppModule { }
