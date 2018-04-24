import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostItemService {

  postItems: Post[] = [];

  postItemSubject = new Subject<Post[]>();

  constructor() { }

  emitPost() {
    this.postItemSubject.next(this.postItems);
  }

  savePost (){

  }

  deletePost(id:number) {

  }

  viewPosts() {

    var firstPost = new Post('test','Content');
    var secondPost = new Post('test2','Content2');

    this.postItems.push(firstPost);
    this.postItems.push(secondPost);
    this.emitPost();
  }

  viewSinglePost (id:number) {

  }

}
