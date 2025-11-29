import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// simple fixed captcha
	const generatedCaptcha = "dacibad";

	function onSubmit(e) {
		e.preventDefault();

		if (!email || !password) {
			setError("Please enter email and password.");
			return;
		}

		if (!captcha) {
			setError("Please enter the captcha.");
			return;
		}

		if (captcha !== generatedCaptcha) {
			setError("Invalid captcha.");
			return;
		}

		setError("");
		navigate("/role");
	}

	return (
		<main className="container" style={{ marginTop: "28px", maxWidth: "560px" }}>
			
			{/* NEW HEADING */}
			<h1 className="section-title">Handicraft Login</h1>

			<p className="section-subtitle">Access your orders and dashboard.</p>

			<form
				className="elevated"
				onSubmit={onSubmit}
				style={{
					padding: "18px",
					display: "grid",
					gap: "12px"
				}}
			>
				<label>
					<div style={{ marginBottom: "6px" }}>Email</div>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{
							width: "100%",
							padding: "12px",
							borderRadius: "12px",
							border: "1px solid #dbc6b2",
							outline: "none"
						}}
						placeholder="you@example.com"
					/>
				</label>

				<label>
					<div style={{ marginBottom: "6px" }}>Password</div>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{
							width: "100%",
							padding: "12px",
							borderRadius: "12px",
							border: "1px solid #dbc6b2",
							outline: "none"
						}}
						placeholder="••••••••"
					/>
				</label>

				{/* NEW CAPTCHA TEXT */}
				<div
					style={{
						fontSize: "26px",
						fontWeight: "bold",
						letterSpacing: "3px",
						color: "#d62740",
						userSelect: "none"
					}}
				>
					{generatedCaptcha}
				</div>

				{/* NEW CAPTCHA INPUT */}
				<label>
					<div style={{ marginBottom: "6px" }}>Enter verification code</div>
					<input
						type="text"
						value={captcha}
						onChange={(e) => setCaptcha(e.target.value)}
						style={{
							width: "100%",
							padding: "12px",
							borderRadius: "12px",
							border: "1px solid #dbc6b2",
							outline: "none"
						}}
						placeholder="Enter code above"
					/>
				</label>

				{error ? (
					<div style={{ color: "#8b3a1e" }}>{error}</div>
				) : null}

				<button className="btn" type="submit" style={{ justifySelf: "start" }}>
					Login
				</button>
			</form>
		</main>
	);
}

export default LoginPage;
