import Product from "./product";

const storeProducts = [
  {
    id: 1,
    name: "T-shirt",
    price: 49.99,
    quantity: 23,
    description:
      "Cotton t-shirt really confortable in summary. Can be worn out or inside a jacket.",
  },
  {
    id: 2,
    name: "Cargo",
    price: 49.99,
    quantity: 23,
    description:
      "Modern era cargo pants, provide a cinematic look and feel. Very cofortable.",
  },
  {
    id: 3,
    name: "Jacket",
    price: 149.99,
    quantity: 23,
    description: "Denim jacket in navy blue color. Can be worn with anything.",
  },
  {
    id: 4,
    name: "Suit",
    price: 249.99,
    quantity: 23,
    description:
      "A party suit provide a elegent look. Usually worn on special occasions.",
  },
  {
    id: 5,
    name: "Denim",
    price: 99.99,
    quantity: 50,
    description:
      "Denim jean cofortable and fashionable. Provide a modern look.",
  },
  {
    id: 6,
    name: "Shoe",
    price: 199.99,
    quantity: 200,
    description:
      "Nike running shoe provides cofortability, cool look and long wear time.",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col w-2/3 items-center px-2">
      <p className="text-lg text-purple-600 px-4">Products</p>

      <div className="flex flex-row flex-wrap w-full p-4">
        {storeProducts.map((product) => (
          <Product key={product.id} prod={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
