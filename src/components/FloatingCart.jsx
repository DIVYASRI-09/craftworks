function FloatingCart({ count = 0, onClick }) {
	return (
		<button className="floating-cart" onClick={onClick}>
			<span>🧺 Cart</span>
			<span className="badge">{count}</span>
		</button>
	);
}

export default FloatingCart;


