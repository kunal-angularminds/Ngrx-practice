
import { createReducer,on } from "@ngrx/store";
import { changeName, customIncrement, decrement, increment, reset} from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState, 
    on(increment,(state)=>{
        return {
            ...state,
            counter : state.counter + 1
        }
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter : (state.counter - 1 < 0 ? 0 : state.counter - 1)
        }
    }),
    on(reset,(state)=>{
        return {
            ...state,
            counter : 0
        }
    }),
    on(customIncrement,(state,action)=>{
        console.log(action);
        return{
            ...state,
            counter:state.counter + action.count
        }
    }),
    on(changeName,(state)=>{
        return{
            ...state,
            channelName:"Modified Channel Name"
        }
    })
    );

export function counterReducer(state:any, action){
    return _counterReducer(state,action);
}