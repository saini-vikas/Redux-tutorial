import Product from "./product";

let products = [
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
];
const Products = () => {
  return (
    <div className="flex flex-row flex-wrap space-x-2 w-2/3">
      <p className="text-md text-purple-600">Products</p>
      {products.map((product) => {
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          description={product.description}
        />;
      })}
    </div>
  );
};

export default Products;
