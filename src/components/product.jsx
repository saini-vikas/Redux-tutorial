const Product = (prod) => {
  console.log(prod.prod.name);
  return (
    <div className="flex flex-col p-2 m-2 border-2 rounded-md w-40 h-44">
      <p className="text-md text-orange-500">{prod.prod.name}</p>
      <p className="text-xs">{prod.prod.description}</p>
      <div className="flex flex-row mt-3">
        <p>{prod.prod.price}</p>
      </div>
    </div>
  );
};

export default Product;
