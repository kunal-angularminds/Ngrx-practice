import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private store:Store<AppState>) { }


  ngOnInit(): void {
    
  }

  // onIncrement(){
  //   this.counter++;
  // }

  // onDecrement(){
  //   this.counter--;
  // }

  // onReset(){
  //   this.counter = 0;
  // }


}
