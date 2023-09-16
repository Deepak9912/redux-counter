import {createSlice, configureStore} from '@reduxjs/toolkit';

const redux = require('redux');

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

//Authectication slice
const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;