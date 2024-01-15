import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  decreaseByAmount,
  increaseByAmount,
} from "./store/counterSlice";
import { useState } from "react";

function App() {
  const currentCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div className="main">
      <h4>Count: {currentCount} </h4>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>
      <br />
      <label htmlFor="amount">Amount: </label>
      <input
        type="number"
        id="amount"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button
        onClick={() => {
          dispatch(increaseByAmount(value));
        }}
      >
        IncrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch(decreaseByAmount(value));
        }}
      >
        DecrementByAmount
      </button>
    </div>
  );
}

export default App;
