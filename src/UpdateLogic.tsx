import { useState } from "react";

const productList = {
  disount: 0.1,
  products: [
    { id: 1, title: "Product 1", quantity: 2 },
    { id: 2, title: "Product 2", quantity: 2 },
  ],
};

const playersList = {
  id: 1,
  player: {
    name: "Saad",
  },
};

const pizza = {
  name: "Euro",
  toppings: ["Mushroom", "Olives"],
};

const UpdateLogic = () => {
  const [products, setProducts] = useState(productList);
  const handleUpdate = () => {
    setProducts({
      ...products,
      products: products.products.filter((product) => product.id <= 2),
    });
  };

  return (
    <>
      <button onClick={handleUpdate}>Add</button>
      <p>{JSON.stringify(productList)}</p>
      <p>{JSON.stringify(products)}</p>
    </>
  );
};

export default UpdateLogic;
