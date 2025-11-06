import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
    const navigate = useNavigate();

	function onSubmit(e) {
		e.preventDefault();
		if (!email || !password) {
			setError("Please enter email and password.");
			return;
		}
		// Placeholder auth flow
		setError("");
		navigate("/role");
	}

	return (
		<main className="container" style={{ marginTop: "28px", maxWidth: "560px" }}>
			<h1 className="section-title">Login</h1>
			<p className="section-subtitle">Access your orders and dashboard.</p>
			<form className="elevated" onSubmit={onSubmit} style={{ padding: "18px", display: "grid", gap: "12px" }}>
				<label>
					<div style={{ marginBottom: "6px" }}>Email</div>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
						style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #dbc6b2", outline: "none" }}
						placeholder="you@example.com" />
				</label>
				<label>
					<div style={{ marginBottom: "6px" }}>Password</div>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
						style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #dbc6b2", outline: "none" }}
						placeholder="••••••••" />
				</label>
				{error ? <div style={{ color: "#8b3a1e" }}>{error}</div> : null}
				<button className="btn" type="submit" style={{ justifySelf: "start" }}>Login</button>
			</form>
		</main>
	);
}

export default LoginPage;


