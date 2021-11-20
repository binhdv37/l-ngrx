import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset } from './actions/counter.actions';
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
    this.count$?.pipe(
      take(1),
      tap(data => {
        console.log('data : ', data);
      })
    ).subscribe();
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
