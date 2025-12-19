import { Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

/* Pages */
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";

export default function AppRoutes() {
  return (
    <>
      {/* Global Layout */}
      <Navbar />

      {/* Page Routes */}
      <main className="pt-20">
        {/* pt-20 offsets fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
