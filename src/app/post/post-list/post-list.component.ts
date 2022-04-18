import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import {Post} from "../../models/post.model"
import { getPosts } from '../state/post.selector';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts:Observable<Post[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id){
    if(confirm("Are you sure, you want to delete")){
      // console.log(`Delete ${id}`);
      this.store.dispatch(deletePost({id}));
    }
  }

}
