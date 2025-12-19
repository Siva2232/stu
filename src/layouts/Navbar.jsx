import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "MODELS", path: "/models" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "SERVICES", path: "/services" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-black text-xl">
            MS
          </div>
          <span className="text-xl font-semibold text-black tracking-wider">
            MODEL STUDIO COOPERATIVE
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}

                {/* Active underline animation */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Social */}
        <div className="hidden lg:flex items-center gap-6">
          <a className="text-gray-600 hover:text-yellow-600 transition">
            <Facebook size={20} />
          </a>
          <a className="text-gray-600 hover:text-yellow-600 transition">
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-black"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
          >
            <nav className="flex flex-col py-8 px-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-4 text-lg font-medium uppercase tracking-wider border-b border-gray-100 last:border-0 flex items-center justify-between ${
                      isActive ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="mobile-dot"
                        className="text-yellow-500 text-xl"
                      >
                        ●
                      </motion.span>
                    )}
                  </Link>
                );
              })}

              <div className="flex justify-center gap-8 mt-8">
                <Facebook size={24} />
                <Instagram size={24} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
