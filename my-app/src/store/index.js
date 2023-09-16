import {createSlice, configureStore} from '@reduxjs/toolkit';

const redux = require('redux');

const initialState = {counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        //need payload so action is needed
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.counter = !state.counter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;