import Counter from "./components/counter";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="container flex flex-row mx-auto p-4 gap-4">
      <div className="flex flex-col flex-1 py-7 px-4 gap-4 items-center">
        <Counter />
      </div>
      <div className="flex flex-1 flex-col  py-7 px-4 gap-4 items-center">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
