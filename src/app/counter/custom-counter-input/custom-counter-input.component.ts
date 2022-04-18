import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName, customIncrement } from '../../state/counter.actions';
import { getChannelName } from '../../state/counter.selector';
import { CounterState } from '../../state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value:number;
  constructor(private store:Store<AppState>) { }

  channelName$:Observable<string>;
  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }
 
  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value}));
  }

  changeName(){
    this.store.dispatch(changeName());
  }


}
