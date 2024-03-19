import Product from "./product";

const storeProducts = [
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 2,
    name: "Jacket",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 3,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
  {
    id: 4,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out in inside a jacket.",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col w-2/3 justify-items-center">
      <p className="text-lg text-purple-600">Products</p>

      <div className="flex flex-row flex-wrap w-full">
        {storeProducts.map((product) => (
          <Product key={product.id} prod={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
