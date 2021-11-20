import { Action, createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from '../actions/counter.actions';

export const initialState = 0;

// createReducer() tra ve state ms nhat
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
