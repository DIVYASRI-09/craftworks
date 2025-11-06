import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import ArtisansPage from "../pages/ArtisansPage";
import LoginPage from "../pages/LoginPage";
import DarkModeToggle from "../components/DarkModeToggle";
import SideTickers from "../components/SideTickers";
import CartDrawer from "../components/CartDrawer";
import RoleSelect from "../pages/RoleSelect";
import SellerDashboard from "../pages/SellerDashboard";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/artisans" element={<ArtisansPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/role" element={<RoleSelect />} />
				<Route path="/seller-dashboard" element={<SellerDashboard />} />
			</Routes>
            <Footer />
            <SideTickers />
            <DarkModeToggle />
            <CartDrawer />
		</BrowserRouter>
	);
}

export default App;
