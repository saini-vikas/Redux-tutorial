import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col p-4 justify-items-center border-2 rounded-lg w-1/3">
      <div className="flex flex-row mb-3 h-1/5 justify-between">
        <h1 className="text-lg font-bold text-blue-500">Cart</h1>
        <h1 className="text-lg font-bold text-blue-500 mr-3">
          Total: {parseFloat(total).toFixed(2)}
        </h1>
      </div>
      <hr className="w-full" />
      <div className="divide-y-2 flex-grow overflow-y-auto">
        {cartItems.map((item) => (
          <div className="flex flex-row justify-between py-2" key={item.name}>
            <p>{item.name}</p>
            <p>
              ${item.price} * {item.quantity} ={" "}
              {parseFloat(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => {
                dispatch(handleRemove);
              }}
              className="px-2 rounded-full bg-red-400 mx-3"
            >
              x
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-row h-1/5 w-full mt-3">
        <button className="px-3 py-1 bg-cyan-600 rounded-md text-white w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
