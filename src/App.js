import { useState, useEffect } from "react";
import { Product } from "./components/Item.jsx";
import "./App.css";

const productsList = [
  {
    name: "Apple",
    count: 0,
    id: 1,
  },
  {
    name: "Tea",
    count: 0,
    id: 2,
  },
  {
    name: "Coffee",
    count: 0,
    id: 3,
  },
];

function App() {
  const [products, setProducts] = useState(productsList);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const selectedItemsCount = products.filter(({ count }) => count > 0).length;
    setProductsCount(selectedItemsCount);
  }, [products]);

  const handleReset = () => {
    setProducts(productsList);
  };

  return (
    <section className="container">
      <div>
        <h2>Selected Products {productsCount}</h2>
        <button onClick={handleReset}>Reset</button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleChangeState={setProducts}
            state={products}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
