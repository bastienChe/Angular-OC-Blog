import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class PostItemService {

  postItems: Post[] = [];

  postItemSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPost() {
    this.postItemSubject.next(this.postItems);
  }

  createNewPost (post: Post) {
    this.postItems.push(post);
    this.savePosts();
    this.emitPost();
  }

  savePosts () {
    firebase.database().ref('/posts').set(this.postItems);
  }

  deletePost (id: number) {
    this.postItems.splice(id, 1);
    this.savePosts();
    this.emitPost();
  }

  like (index: number) {
    this.postItems[index].nbLike++;
    this.savePosts();
    this.emitPost();
  }

  unlike (index: number) {
    this.postItems[index].nbLike--;
    this.savePosts();
    this.emitPost();
  }

  viewPosts() {
    firebase.database()
      .ref('/posts')
      .on('value', (data) => {
      this.postItems = data.val() ? data.val() : [];
      this.emitPost();
      });
    this.emitPost();
  }

  getSinglePost (id: number) {
    return new Promise(
      (resolve, reject) => {
        resolve(this.postItems[id]);
      },
    );
  }

}
