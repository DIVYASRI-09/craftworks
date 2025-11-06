function Footer() {
	return (
		<footer id="contact" className="footer">
			<div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
				<div>
					<strong>Lo Crafts and Heritage</strong>
					<p style={{ marginTop: "8px", color: "#6a5848" }}>
						Contact: support@locrafts.example • +91 98765 43210
					</p>
				</div>
				<div style={{ justifySelf: "end", alignSelf: "center" }}>
					<a href="#" style={{ marginRight: "10px" }}>Instagram</a>
					<a href="#" style={{ marginRight: "10px" }}>Facebook</a>
					<a href="#">X</a>
				</div>
			</div>
			<div className="container" style={{ marginTop: "10px", fontSize: "14px" }}>
				© {new Date().getFullYear()} Lo Crafts and Heritage. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;


