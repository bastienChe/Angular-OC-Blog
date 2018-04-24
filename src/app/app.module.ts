import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostItemComponent } from './post-list-item/post-item/post-item.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostFormComponent } from './post-list-item/post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { PostItemService } from './services/post-item.service';

const appRoutes: Routes = [
  { path: 'postList', component: PostListItemComponent },
  { path: '', redirectTo:'postList', pathMatch: 'full'},
  { path: '**', redirectTo:'postList'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListItemComponent,
    PostFormComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
