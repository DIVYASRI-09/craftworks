import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const products = [
  { name: "T-Shirt", price: 20, image: "/src/assets/products/tshirt.jpg" },
  { name: "Mug", price: 10, image: "/src/assets/products/mug.jpg" },
  { name: "Hat", price: 15, image: "/src/assets/products/hat.jpg" },
];

function CustomerPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <h1>Customer Page</h1>
      <Cart cart={cart} />
      <div style={{ display: "flex" }}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default CustomerPage;
