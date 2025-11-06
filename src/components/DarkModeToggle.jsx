import { useEffect, useState } from "react";

function DarkModeToggle() {
	const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> {theme === "dark" ? "☀️ Light" : "🌙 Dark"} </button>
	);
}

export default DarkModeToggle;


