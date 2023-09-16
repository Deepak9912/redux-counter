import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

export default counterSlice.reducer;
