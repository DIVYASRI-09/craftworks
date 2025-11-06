import { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import OfferStrip from "../components/OfferStrip";
import FloatingCart from "../components/FloatingCart";
import { useCart } from "../context/CartContext";

// ✅ All images are now inside public/images/
const initialProducts = [
  {
    name: "Bamboo Basket",
    price: 799,
    artisan: "Ravi Oraon",
    category: "Bamboo",
    rating: 4.6,
    image: "/images/bamboo.jpg",
  },
  {
    name: "Handloom Stole",
    price: 1599,
    artisan: "Sita Naik",
    category: "Textile",
    rating: 4.5,
    image: "/images/handloom.jpg",
  },
  {
    name: "Warli Painting",
    price: 2499,
    artisan: "Meera Pawar",
    category: "Painting",
    rating: 4.8,
    image: "/images/warli_art_17.jpg",
  },
  {
    name: "Dhokra Idol",
    price: 3499,
    artisan: "Kishan Munda",
    category: "Metal",
    rating: 4.7,
    image: "/images/dhokra_idol.jpg",
  },
  {
    name: "Terracotta Vase",
    price: 899,
    artisan: "Asha Devi",
    category: "Clay",
    rating: 4.9,
    image: "/images/terracotta_vase.jpg",
  },
];

function HomePage() {
  const { items, addItem, setIsOpen } = useCart();

  return (
    <main>
      <Hero />

      {/* ---------- About Section ---------- */}
      <section id="about" className="container" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Our Mission</h2>
        <p className="section-subtitle">
          We connect you with authentic tribal craftsmanship while ensuring fair income and dignity for artisans.
          A portion of every order goes to training, tools, and community development.
        </p>
        <div className="elevated mission" style={{ padding: "18px" }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Sustainability & Heritage</h3>
            <p>
              From natural dyes to traditional techniques, our products preserve age-old knowledge
              and promote eco-friendly livelihoods.
            </p>
          </div>
          <div>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li>Fair pricing and transparent sourcing</li>
              <li>Skills upgradation and design inputs</li>
              <li>Direct artisan community partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Offers ---------- */}
      <OfferStrip />

      {/* ---------- Products ---------- */}
      <section id="shop" className="container" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Featured Crafts</h2>
        <p className="section-subtitle">Curated pieces that blend heritage with contemporary design.</p>

        <Carousel>
          {initialProducts.map((p, i) => (
            <div key={i} className="carousel-item" style={{ width: 280 }}>
              <ProductCard product={p} addToCart={addItem} />
            </div>
          ))}
        </Carousel>
      </section>

      {/* ---------- Artisans ---------- */}
      <section id="artisans" className="container" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Our Artisans</h2>
        <p className="section-subtitle">Stories of resilience, creativity, and cultural pride.</p>

        <Carousel>
          <div className="carousel-item" style={{ width: 360 }}>
            <div className="elevated" style={{ padding: "18px" }}>
              <h3 style={{ marginTop: 0 }}>Asha Devi • Terracotta</h3>
              <p>Reviving natural clay traditions with modern forms.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ width: 360 }}>
            <div className="elevated" style={{ padding: "18px" }}>
              <h3 style={{ marginTop: 0 }}>Ravi Oraon • Bamboo</h3>
              <p>Sustainably sourcing bamboo to craft light, durable baskets.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ width: 360 }}>
            <div className="elevated" style={{ padding: "18px" }}>
              <h3 style={{ marginTop: 0 }}>Meera Pawar • Warli</h3>
              <p>Traditional warli motifs retold for contemporary spaces.</p>
            </div>
          </div>
        </Carousel>
      </section>

      {/* ---------- Login ---------- */}
      <section id="login" className="container" style={{ marginTop: "40px" }}>
        <h2 className="section-title">Member Login</h2>
        <p className="section-subtitle">Access your orders and artisan dashboard (coming soon).</p>
        <div className="elevated" style={{ padding: "18px" }}>
          <p style={{ margin: 0 }}>Login functionality will be integrated here.</p>
        </div>
      </section>

      {/* ---------- Floating Cart ---------- */}
      <FloatingCart count={items.length} onClick={() => setIsOpen(true)} />
    </main>
  );
}

export default HomePage;






