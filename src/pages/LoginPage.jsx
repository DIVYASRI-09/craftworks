import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [captchaInput, setCaptchaInput] = useState("");
	const [generatedCaptcha, setGeneratedCaptcha] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// Generate random captcha
	const generateCaptcha = () => {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		for (let i = 0; i < 6; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		setGeneratedCaptcha(result);
	};

	// Run on page load
	useEffect(() => {
		generateCaptcha();
	}, []);

	function onSubmit(e) {
		e.preventDefault();

		// Empty check
		if (!email || !password) {
			setError("Please enter email and password.");
			return;
		}

		// Captcha check
		if (!captchaInput) {
			setError("Please enter the captcha.");
			return;
		}

		if (captchaInput !== generatedCaptcha) {
			setError("Invalid captcha. Try again.");
			generateCaptcha();
			setCaptchaInput("");
			return;
		}

		// Hardcoded login credentials
		if (email === "kavya@gmail.com" && password === "kavya123") {
			setError("");
			navigate("/role"); // success page
		} else {
			setError("Invalid email or password.");
		}
	}

	return (
		<main className="container" style={{ marginTop: "28px", maxWidth: "560px" }}>
			<h1 className="section-title">Handicraft Login</h1>
			<p className="section-subtitle">Access your orders and dashboard.</p>

			<form
				className="elevated"
				onSubmit={onSubmit}
				style={{ padding: "18px", display: "grid", gap: "12px" }}
			>
				<label>
					<div>Email</div>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
					/>
				</label>

				<label>
					<div>Password</div>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="••••••••"
					/>
				</label>

				{/* Captcha Display */}
				<div
					style={{
						fontSize: "26px",
						fontWeight: "bold",
						letterSpacing: "3px",
						color: "#d62740",
						userSelect: "none",
					}}
				>
					{generatedCaptcha}
				</div>

				{/* Refresh Captcha */}
				<button
					type="button"
					onClick={generateCaptcha}
					style={{
						width: "120px",
						padding: "6px",
						borderRadius: "8px",
						cursor: "pointer",
					}}
				>
					Refresh
				</button>

				<label>
					<div>Enter verification code</div>
					<input
						type="text"
						value={captchaInput}
						onChange={(e) => setCaptchaInput(e.target.value)}
						placeholder="Enter code above"
					/>
				</label>

				{/* Error Message */}
				{error && <div style={{ color: "#8b3a1e" }}>{error}</div>}

				<button className="btn" type="submit">
					Login
				</button>
			</form>
		</main>
	);
}

export default LoginPage;
