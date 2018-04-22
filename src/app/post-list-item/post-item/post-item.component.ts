import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  ngOnInit() {
  }

  absLoveIts(){
    return Math.abs(this.loveIts);
  }

  updateHits(_symbol){
    if(_symbol === '+'){
      this.loveIts++;
    }
    else if(_symbol === '-'){
      this.loveIts--;
    }
  }

}
