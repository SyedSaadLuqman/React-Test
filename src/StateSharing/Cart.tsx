interface Props {
  products: string[];
  onClear: () => void;
}

const Cart = ({ products, onClear }: Props) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
      {products.length > 0 && <button onClick={onClear}>Clear Cart</button>}
    </>
  );
};

export default Cart;
