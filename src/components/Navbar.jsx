import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
	const { pathname } = useLocation();
	const isActive = (path) => pathname === path ? { background: "rgba(200,104,60,0.18)" } : undefined;
	const publicLogo = undefined; // keep SVG logo
	return (
		<header className="nav">
			<div className="container nav-inner">
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "inherit" }}>
						<Logo size={36} imageSrc={publicLogo} />
						<strong>HandiCraft</strong>
					</Link>
				</div>
				<nav style={{ display: "flex", gap: "6px" }}>
					<Link to="/" style={isActive("/")}>Home</Link>
					<Link to="/about" style={isActive("/about")}>About Us</Link>
					<Link to="/shop" style={isActive("/shop")}>Shop</Link>
					<Link to="/artisans" style={isActive("/artisans")}>Our Artisans</Link>
					<Link to="/login" style={isActive("/login")}>Login</Link>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
