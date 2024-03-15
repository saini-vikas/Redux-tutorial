const Product = (name) => {
  return (
    <div>
      <div className="flex flex-col p-2 m-2 rounded-md border-r-2">
        <p className="font-sans text-md ">{name}</p>
      </div>
    </div>
  );
};

export default Product;
