import { useDispatch } from "react-redux";
import { toggleTodo } from "./../store/todoSlice";
function Todo(props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row">
      <input
        className="mx-3"
        id={props.id}
        type="checkbox"
        onChange={() => {
          dispatch(toggleTodo(props.id));
        }}
      />
      <label
        className={props.completed ? "text-green-600" : ""}
        htmlFor={props.id}
      >
        {props.title}
      </label>
    </div>
  );
}

export default Todo;
