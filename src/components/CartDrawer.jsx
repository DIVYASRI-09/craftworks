import { useCart } from "../context/CartContext";

function CartDrawer() {
	const { items, removeItem, clearCart, total, isOpen, setIsOpen, paymentMethod, setPaymentMethod } = useCart();
	if (!isOpen) return null;
	return (
		<div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.25)", display: "flex", justifyContent: "flex-end", zIndex: 60 }} onClick={() => setIsOpen(false)}>
			<div className="elevated" style={{ width: 380, height: "100%", background: "var(--color-card)", padding: 16, overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
				<h2 className="section-title" style={{ marginTop: 0 }}>Your Cart</h2>
				{items.length === 0 ? (
					<p className="section-subtitle" style={{ marginTop: 8 }}>Your cart is empty.</p>
				) : (
					<>
						{items.map((p) => (
							<div key={p.id} style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 10, alignItems: "center", marginBottom: 12 }}>
								<div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", background: "#eee" }}>
									{p.image ? <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
								</div>
								<div>
									<strong>{p.name}</strong>
									<div style={{ color: "#6a5848" }}>₹{p.price}</div>
								</div>
								<button className="btn btn-secondary" onClick={() => removeItem(p.id)}>Remove</button>
							</div>
						))}
						<hr style={{ border: 0, borderTop: "1px solid rgba(0,0,0,0.1)", margin: "12px 0" }} />
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
							<strong>Total</strong>
							<strong>₹{total}</strong>
						</div>
						<div style={{ marginBottom: 12 }}>
							<h3 style={{ margin: "12px 0" }}>Payment Method</h3>
							<label style={{ display: "block", marginBottom: 6 }}><input type="radio" name="pay" value="upi" checked={paymentMethod === "upi"} onChange={() => setPaymentMethod("upi")} /> UPI</label>
							<label style={{ display: "block", marginBottom: 6 }}><input type="radio" name="pay" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} /> Card</label>
							<label style={{ display: "block", marginBottom: 6 }}><input type="radio" name="pay" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} /> Cash on Delivery</label>
						</div>
						<div style={{ display: "flex", gap: 10 }}>
							<button className="btn btn-secondary" onClick={clearCart}>Clear</button>
							<button className="btn btn-primary" onClick={() => alert(`Paying ₹${total} via ${paymentMethod.toUpperCase()}`)}>Pay Now</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default CartDrawer;


