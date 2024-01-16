import Todo from "./todo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./../store/todoSlice";
function TodoList() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");

  const handleClick = () => {
    dispatch(add(newTitle));
    setNewTitle("");
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg">To Do List</p>
      <label htmlFor="new-todo"></label>
      <input
        className="border border-stone-500 rounded-md py-1 px-2"
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        id="new-todo"
      />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <Todo id={todo.id} title={todo.title} completed={todo.completed} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleClick()}
        className="px-4 py-2 min-w-48 max-w-56 bg-indigo-500 rounded-md active:scale-95 shadow-md shadow-slate-300"
      >
        Add todo
      </button>
    </div>
  );
}

export default TodoList;
