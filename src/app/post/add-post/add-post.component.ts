import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm : FormGroup;

  constructor(private fb:FormBuilder, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title:["", [Validators.required, Validators.minLength(6)]],
      description:["",[Validators.required, Validators.minLength(10)]]
    });
  }

  onAddPost(){

    if(this.postForm.invalid){
      return;
    }

    // console.log(this.postForm.value);

    const post :Post = {
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }

    this.store.dispatch(addPost({post}));

  }



}
