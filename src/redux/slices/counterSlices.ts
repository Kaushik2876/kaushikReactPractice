import {createAction , createReducer} from '@reduxjs/toolkit';

interface CounterState {
    counter: number
  }

export const increment = createAction<number | undefined>('counter/increment')
export const decrement = createAction<number | undefined>('decrement/counter');
export const increaseAmount = createAction<number>('counter/incrementByAmount')



//reducer function
const initialState = {counter: 0} as CounterState;

export const counterSlices = createReducer(initialState, (builder) => {
    builder.addCase(increment,(state ) => {
        state.counter ++
    })
    .addCase(decrement,(state) => {
        state.counter --
    })
    .addCase(increaseAmount,(state ,action) => {
        state.counter += action.payload;
    })
});


