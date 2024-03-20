import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="flex flex-col p-4 justify-items-center border-2 rounded-lg w-1/3 ">
      <h1 className="text-lg font-bold text-blue-500 mb-3">Cart</h1>
      <div className="divide-y-2">
        {cartItems.map((item) => (
          <div className="flex flex-row justify-between mt-2" key={item.name}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
