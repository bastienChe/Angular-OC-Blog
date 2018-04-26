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

  like(post: Post) {
    post.uplike();
    this.emitPost();
  }

  unlike(post: Post) {
    post.downLike();
    this.emitPost();
  }

  viewPosts() {

    var firstPost = new Post('test','Content', new Date(),0);
    var secondPost = new Post('test2','Content2', new Date(),0);
    var thirdPost = new Post('test3','Content3', new Date(),0);
    var fourthPost = new Post('test4','Content4', new Date(),0);

    this.postItems.push(firstPost);
    this.postItems.push(secondPost);
    this.postItems.push(thirdPost);
    this.postItems.push(fourthPost);
    this.emitPost();
  }

  viewSinglePost (id: number) {

  }

}
