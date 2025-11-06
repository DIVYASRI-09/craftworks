import { Link } from "react-router-dom";

function RoleSelect() {
	return (
		<main className="container" style={{ marginTop: "28px" }}>
			<h1 className="section-title">Choose your path</h1>
			<p className="section-subtitle">Continue as a customer or start selling your crafts.</p>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
				<div className="elevated" style={{ padding: 18 }}>
					<h3 style={{ marginTop: 0 }}>Customer</h3>
					<p>Browse curated tribal handicrafts and place orders.</p>
					<Link className="btn" to="/shop">Go to Shop</Link>
				</div>
				<div className="elevated" style={{ padding: 18 }}>
					<h3 style={{ marginTop: 0 }}>Seller</h3>
					<p>List your products with images, fair price and story.</p>
					<Link className="btn" to="/seller-dashboard">Start Selling</Link>
				</div>
			</div>
		</main>
	);
}

export default RoleSelect;


