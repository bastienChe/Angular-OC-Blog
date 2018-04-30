import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
   // Initialize Firebase for the whole app
   const config = {
      apiKey: 'AIzaSyB5P8Xfe55ELXac6PH_ajiBOe6cC1hdge4',
      authDomain: 'oc-training-blog.firebaseapp.com',
      databaseURL: 'https://oc-training-blog.firebaseio.com',
      projectId: 'oc-training-blog',
      storageBucket: '',
      messagingSenderId: '510035295106'
   };
   firebase.initializeApp(config);

 }

}
