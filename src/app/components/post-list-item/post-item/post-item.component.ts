import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostItemService } from '../../../services/post-item.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostItemService,
    private router: Router) { }

  post: Post;

  ngOnInit() {
    this.post = new Post('', '', Date.now());
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  back() {
    this.router.navigate(['/postList']);
  }

}
