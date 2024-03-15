const Product = (prod) => {
  console.log(prod.prod.name);
  return (
    <div className="flex flex-col p-2 m-2 rounded-md w-36 h-40">
      <p className="">{prod.prod.name}</p>
    </div>
  );
};

export default Product;
