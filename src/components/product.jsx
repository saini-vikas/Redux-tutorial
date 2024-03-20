const Product = (prod) => {
  console.log(prod.prod.name);
  return (
    <div className="flex flex-col p-2 justify-around m-2 border-2 rounded-md w-40 h-44">
      <div className="flex flex-row justify-between">
        <p className="text-md text-orange-500">{prod.prod.name}</p>
        <p>${prod.prod.price}</p>
      </div>
      <p className="text-xs">{prod.prod.description}</p>
      <button className="bg-cyan-300 rounded px-2 py-0 w-full active:scale-95 active:bg-cyan-400">
        Add
      </button>
    </div>
  );
};

export default Product;
