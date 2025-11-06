function Rating({ value = 4.5 }) {
	const full = Math.floor(value);
	const half = value - full >= 0.5;
	const stars = Array.from({ length: 5 }, (_, i) => {
		if (i < full) return "★";
		if (i === full && half) return "☆";
		return "☆";
	});
	return <span style={{ color: "#b88a44" }}>{stars.join(" ")}</span>;
}

export default Rating;


