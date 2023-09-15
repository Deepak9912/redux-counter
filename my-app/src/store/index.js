import {createStore} from 'redux';

const redux = require('redux');

const counterReducer = (state={ counter: 0 }, action) => {
    if(action.type === 'increment'){
        return {counter: state.counter+1}
    }
    if(action.type === 'increase'){
        //we can get the value by whc we wanna increase from the action
        return {counter : state.counter + action.amount}
    }
    if(action.type === 'decrement'){
        return {counter: state.counter-1}
    }

    return state;
};

const store = createStore(counterReducer);

export default store;