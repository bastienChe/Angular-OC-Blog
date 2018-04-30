import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostItemService {

  postItems: Post[] = [];

  postItemSubject = new Subject<Post[]>();

  constructor() {

    const firstPost = new Post('test', 'Content', new Date(), 0);
    const secondPost = new Post('test2', 'Content2', new Date(), 0);
    const thirdPost = new Post('test3', 'Content3', new Date(), 0);
    const fourthPost = new Post('test4', 'Content4', new Date(), 0);

    this.postItems.push(firstPost);
    this.postItems.push(secondPost);
    this.postItems.push(thirdPost);
    this.postItems.push(fourthPost);
  }

  emitPost() {
    this.postItemSubject.next(this.postItems);
  }

  savePost () {

  }

  deletePost(id: number) {
    this.postItems.splice(id, 1);
    this.emitPost();
  }

  like(post: Post) {
    post.uplike();
    this.emitPost();
  }

  unlike(post: Post) {
    post.downLike();
    this.emitPost();
  }

  viewPosts() {


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
