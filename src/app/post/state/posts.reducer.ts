import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, editPost } from "./posts.actions";
import { initialState } from "./posts.state";


const _postReducer = createReducer(initialState,
    on(addPost,(state, action)=>{

        let post:any = {...action.post};
        post.id = (state.posts.length + 1).toString();
        console.log(action);
        return{
            ...state,
            posts:[...state.posts, post]
        }
    }),
    on(editPost,(state, action)=>{
        const updatedPost = state.posts.map((post)=>{
            return action.post.id === post.id ? action.post : post;
        });

        return{
            ...state,
            posts : updatedPost
        }
    }),
    on(deletePost,(state,action)=>{
        const updatePost = state.posts.filter((post)=>{
            return post.id !== action.id;
        });
        return{
            ...state,
            posts:updatePost
        }
    })
    
    );

export function postReducer(state,action){
    return _postReducer(state,action);
}