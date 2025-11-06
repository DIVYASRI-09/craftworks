import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [items, setItems] = useState(() => {
		try { return JSON.parse(localStorage.getItem("cart-items") || "[]"); } catch { return []; }
	});
	const [isOpen, setIsOpen] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState("upi");

	useEffect(() => {
		localStorage.setItem("cart-items", JSON.stringify(items));
	}, [items]);

	const addItem = (product) => {
		setItems((prev) => [...prev, { ...product, id: crypto.randomUUID(), qty: 1 }]);
	};
	const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
	const clearCart = () => setItems([]);
	const total = useMemo(() => items.reduce((s, p) => s + Number(p.price) * (p.qty || 1), 0), [items]);

	const value = { items, addItem, removeItem, clearCart, total, isOpen, setIsOpen, paymentMethod, setPaymentMethod };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}


