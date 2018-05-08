import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostItemComponent } from './components/post-list-item/post-item/post-item.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostFormComponent } from './components/post-list-item/post-form/post-form.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { PostItemService } from './services/post-item.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'postList', component: PostListItemComponent },
  { path: 'post/:id',  component: PostItemComponent },
  { path: 'postForm', component: PostFormComponent },
  { path: '', redirectTo: 'postList', pathMatch: 'full'},
  { path: '**', redirectTo: 'postList'}
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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
