import Rating from "./Rating";
import { useState } from "react";

function ProductCard({ product, addToCart }) {
  // Load the image path (from public/images)
  const [imgSrc, setImgSrc] = useState(product.image);

  return (
    <div className="product-card" style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      background: "#fff"
    }}>
      <div className="product-image" style={{ width: "100%", height: "220px", overflow: "hidden" }}>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => {
              if (product.fallbackImage && imgSrc !== product.fallbackImage) {
                setImgSrc(product.fallbackImage);
              } else {
                setImgSrc("");
              }
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            background: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#777",
            fontSize: "14px"
          }}>
            {product.category || "Handcrafted"}
          </div>
        )}
      </div>

      <div className="product-body" style={{ padding: "12px" }}>
        <h3 className="product-name" style={{ margin: "0 0 6px 0", fontSize: "18px" }}>
          {product.name}
        </h3>

        <p className="product-meta" style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          By {product.artisan} • <Rating value={product.rating || 4.5} />
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ fontSize: "16px", color: "#222" }}>₹{product.price}</strong>
          <button
            className="btn"
            style={{
              background: "#ff7043",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
