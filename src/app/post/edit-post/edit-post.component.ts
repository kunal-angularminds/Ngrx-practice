import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';
import { editPost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;
  constructor(private router: ActivatedRoute, private store: Store<AppState>, private fb: FormBuilder, private routee:Router) { }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: any) => {
      console.log(params.get('id'));
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, { id }).subscribe((data) => {
        // console.log(data);
        this.post = data;
        this.createForm();

      });
    });


  }

  createForm() {
    this.postForm = this.fb.group({
      title: [this.post.title, [Validators.required, Validators.minLength(6)]],
      description: [this.post.description, [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if(this.postForm.invalid){
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    // dispatch the action
    const post:Post = {
      id: this.post.id,
      title,
      description
    }

    this.store.dispatch(editPost({post}));
    this.routee.navigate(['posts'])

  }

}


