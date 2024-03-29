import Counter from "./components/counter";
import TodoList from "./components/todoList";
import Products from "./components/products";
import Cart from "./components/cart";

function App() {
  return (
    <div className="flex flex-row mx-auto p-4 gap-4 flex-wrap">
      <div className="flex flex-col flex-1 py-7 px-4 gap-4 items-center">
        <Counter />
      </div>
      <div className="flex flex-1 flex-col  py-7 px-4 gap-4 items-center">
        <TodoList />
      </div>
      <div className="flex flex-row mx-auto w-full px-4 h-auto">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
