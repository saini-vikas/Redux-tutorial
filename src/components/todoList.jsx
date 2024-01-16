import Todo from "./todo";
import { useSelector } from "react-redux";
function TodoList() {
  const todoList = useSelector((state) => state.todo);

  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
