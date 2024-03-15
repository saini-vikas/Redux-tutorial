import Product from "./product";


const Products = () => {
  return (
    <div className="flex flex-row flex-wrap space-x-2 w-2/3">
      <p className="text-md text-purple-600">Products</p>
      {products.map((product) => {
        <Product key={product.id} prod={product} />;
      })}
    </div>
  );
};

export default Products;
