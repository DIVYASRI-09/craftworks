import { useState } from "react";

function SellerDashboard() {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState(null);
	const [preview, setPreview] = useState("");

	function onImage(e) {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
			setPreview(URL.createObjectURL(file));
		}
	}

	function addItem(e) {
		e.preventDefault();
		if (!name || !price || !desc) return;
		const newItem = { id: Date.now(), name, price: Number(price), desc, preview };
		setItems([newItem, ...items]);
		setName(""); setPrice(""); setDesc(""); setImage(null); setPreview("");
	}

	return (
		<main className="container" style={{ marginTop: "28px" }}>
			<h1 className="section-title">Seller Dashboard</h1>
			<p className="section-subtitle">Add your handcrafted products with fair price and story.</p>
			<form className="elevated" onSubmit={addItem} style={{ padding: 18, display: "grid", gap: 12 }}>
				<label>
					<div style={{ marginBottom: 6 }}>Product name</div>
					<input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #dbc6b2" }} />
				</label>
				<label>
					<div style={{ marginBottom: 6 }}>Price (₹)</div>
					<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #dbc6b2" }} />
				</label>
				<label>
					<div style={{ marginBottom: 6 }}>Describe the craft and materials</div>
					<textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} style={{ width: "100%", padding: 12, borderRadius: 12, border: "1px solid #dbc6b2" }} />
				</label>
				<label>
					<div style={{ marginBottom: 6 }}>Product image</div>
					<input type="file" accept="image/*" onChange={onImage} />
				</label>
				{preview ? <img src={preview} alt="preview" style={{ width: 180, borderRadius: 12 }} /> : null}
				<button className="btn" type="submit" style={{ justifySelf: "start" }}>Add Product</button>
			</form>

			<div style={{ marginTop: 24 }}>
				<h2 className="section-title">Your Listings</h2>
				<div className="grid">
					{items.map((it) => (
						<div key={it.id} className="elevated" style={{ overflow: "hidden" }}>
							<div style={{ height: 160, background: "#f0dfd1", display: "flex", alignItems: "center", justifyContent: "center" }}>
								{it.preview ? <img src={it.preview} alt="item" style={{ maxHeight: "100%" }} /> : <span>No image</span>}
							</div>
							<div style={{ padding: 14 }}>
								<strong>{it.name}</strong>
								<div style={{ color: "#6a5848", margin: "6px 0" }}>{it.desc}</div>
								<div>₹{it.price}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default SellerDashboard;


