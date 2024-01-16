import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  decreaseByAmount,
  increaseByAmount,
} from "./../store/counterSlice";
import { useState } from "react";

function Counter() {
  const currentCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <>
      <p className="text-xl">Counter</p>
      <p className="text-base">Count: {currentCount} </p>
      <button
        className="px-4 py-2 min-w-48 max-w-56 bg-sky-500 rounded-md active:scale-95 shadow-md shadow-slate-300"
        onClick={() => dispatch(increase())}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 min-w-48 max-w-56 bg-red-400 rounded-md active:scale-95 shadow-md shadow-slate-300"
        onClick={() => dispatch(decrease())}
      >
        Decrement
      </button>
      <label className="text-base" htmlFor="amount">
        Amount:{" "}
      </label>
      <input
        className="border border-stone-500 rounded-md py-1 px-2"
        type="number"
        id="amount"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button
        className="bg-sky-500 px-4 py-2 rounded-md  active:scale-95 min-w-48 max-w-56 shadow-md shadow-slate-300"
        onClick={() => {
          dispatch(increaseByAmount(value));
        }}
      >
        IncrementByAmount
      </button>
      <button
        className="bg-red-400 px-4 py-2 rounded-md active:scale-95 min-w-48 max-w-56 shadow-md shadow-slate-300"
        onClick={() => {
          dispatch(decreaseByAmount(value));
        }}
      >
        DecrementByAmount
      </button>
    </>
  );
}

export default Counter;
