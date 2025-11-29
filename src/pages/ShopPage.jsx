import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
    { 
        name: "Bamboo Basket", 
        price: 799, 
        artisan: "Ravi Oraon", 
        category: "Bamboo",
        image: "/images/bamboo.jpg" ,
    },
    { 
        name: "Dhokra Idol", 
        price: 3499, 
        artisan: "Kishan Munda", 
        category: "Metal",
        image: "/images/dhokra_idol.jpg",
    },
    { 
        name: "Handloom Stole", 
        price: 1599, 
        artisan: "Sita Naik", 
        category: "Textile",
        image: "/images/handloom.jpg",
    }
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
