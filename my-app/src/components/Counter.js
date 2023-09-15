import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //use the dispatch function to dispatch an action against redux store
  const dispatch = useDispatch();
  //useSelector will receive a function which receive state managed by redux
  //and then return a part of that state that we want to extract
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  };

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
