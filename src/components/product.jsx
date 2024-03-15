const Product = ({ prod }) => {
  return (
    <div className="flex flex-col p-2 m-2 rounded-md border-r-2">
      <p className="font-sans text-md ">{prod.name}</p>
    </div>
  );
};

export default Product;
