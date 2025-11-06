function SideTickers() {
	const messages = [
		"🔥 Diwali Sale: Up to 25% off Terracotta & Dhokra",
		"🚚 Free global shipping above ₹2999",
		"✨ New artisan stories every Friday",
		"🎁 Combo offers on Bamboo + Warli",
		"🧵 Handloom stoles now live",
	];

	return (
		<>
			<div className="side-ticker left">
				<div className="side-track">
					{messages.concat(messages).map((m, i) => (
						<div key={i}>{m}</div>
					))}
				</div>
			</div>
			<div className="side-ticker right">
				<div className="side-track">
					{messages.concat(messages).map((m, i) => (
						<div key={i}>{m}</div>
					))}
				</div>
			</div>
		</>
	);
}

export default SideTickers;


