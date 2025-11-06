import Rating from "./Rating";
import { useState } from "react";

function ProductCard({ product, addToCart }) {
	const [imgSrc, setImgSrc] = useState(product.image);
	return (
		<div className="product-card">
			<div className="product-image">
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
					<span>{product.category || "Handcrafted"}</span>
				)}
			</div>
			<div className="product-body">
				<h3 className="product-name">{product.name}</h3>
				<p className="product-meta">By {product.artisan} • <Rating value={product.rating || 4.5} /></p>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<strong>₹{product.price}</strong>
					<button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
