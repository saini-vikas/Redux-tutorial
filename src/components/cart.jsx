import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="flex flex-col p-4 justify-items-center border-2 rounded-lg w-1/3">
      <div className="flex flex-row mb-3">
        <h1 className="text-lg font-bold text-blue-500">Cart</h1>
      </div>
      <div className="divide-y-2">
        {cartItems.map((item) => (
          <div className="flex flex-row justify-between py-2" key={item.name}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button className="px-2 rounded-full bg-red-400">x</button>
          </div>
        ))}
      </div>

      <button className="place-self-end">Place Order</button>
    </div>
  );
};

export default Cart;
