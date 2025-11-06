import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
	{ name: "Terracotta Vase", price: 1299, artisan: "Asha Devi", category: "Terracotta" },
	{ name: "Bamboo Basket", price: 799, artisan: "Ravi Oraon", category: "Bamboo" },
	{ name: "Warli Painting", price: 2499, artisan: "Meera Pawar", category: "Painting" },
	{ name: "Dhokra Idol", price: 3499, artisan: "Kishan Munda", category: "Metal" },
	{ name: "Handloom Stole", price: 1599, artisan: "Sita Naik", category: "Textile" }
];

function ShopPage() {
	const [cart, setCart] = useState([]);
	const addToCart = (product) => setCart([...cart, product]);

	return (
		<main className="container" style={{ marginTop: "28px" }}>
			<h1 className="section-title">Shop</h1>
			<p className="section-subtitle">Explore curated tribal handicrafts.</p>
			<div className="grid">
				{products.map((p, i) => (
					<ProductCard key={i} product={p} addToCart={addToCart} />
				))}
			</div>
		</main>
	);
}

export default ShopPage;


