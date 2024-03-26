import { useState } from "react";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = (prod) => {
  const cartItems = useSelector((state) => state.cart);
  const currentProduct = cartItems.filter((item) => item.name === prod.name)[0];
  const currentProductInCart =
    currentProduct === undefined ? 0 : currentProduct.quantity;
  const [quantity, setQuantity] = useState(currentProductInCart);
  const dispatch = useDispatch();

  function handleQuantityIncrease() {
    if (quantity < prod.prod.quantity) {
      setQuantity((prev) => prev + 1);
      dispatch(increaseQuantity({ name: prod.prod.name }));
    }
  }
  function handleQuantityDecrease() {
    if (quantity > -1) {
      setQuantity((prev) => prev - 1);
      dispatch(decreaseQuantity({ name: prod.prod.name }));
    }
  }

  function handleAdd() {
    if (quantity === 0) {
      setQuantity(1);
      dispatch(
        addToCart({
          name: prod.prod.name,
          price: prod.prod.price,
          quantity: 1,
        })
      );
    }
  }

  return (
    <div className="flex flex-col p-2 justify-around m-2 border-2 rounded-md w-40 h-44">
      <div className="flex flex-row justify-between">
        <p className="text-md text-orange-500">{prod.prod.name}</p>
        <p>${prod.prod.price}</p>
      </div>
      <p className="text-xs">{prod.prod.description}</p>
      {quantity === 0 ? (
        <button
          className="bg-cyan-300 rounded px-2 py-0 w-full active:scale-95 active:bg-cyan-400"
          onClick={handleAdd}
        >
          Add
        </button>
      ) : (
        <div className="flex flex-row justify-evenly">
          <button
            onClick={handleQuantityDecrease}
            className="bg-red-500 px-2 rounded-full"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleQuantityIncrease}
            className="bg-green-400 px-2 rounded-full"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
