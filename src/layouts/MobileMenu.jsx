import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "MODELS", path: "/models" },
  { name: "SERVICES", path: "/services" },
  { name: "JOIN US", path: "/join" },
  { name: "CONTACT", path: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white"
    >
      {/* Close Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="absolute top-8 right-8 text-gray-800 hover:text-yellow-600 transition"
        aria-label="Close menu"
      >
        <X size={36} />
      </motion.button>

      {/* Menu Content */}
      <div className="h-full flex flex-col items-center justify-center gap-10 px-8">
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            >
              <Link
                to={link.path}
                onClick={onClose}
                className="text-3xl md:text-4xl font-medium uppercase tracking-wider text-gray-800 hover:text-yellow-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-yellow-500 transition-all duration-500 group-hover:w-full group-hover:left-0" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-10 mt-12"
        >
          <a
            href="#"
            className="text-gray-600 hover:text-yellow-600 transition"
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-yellow-600 transition"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
        </motion.div>

        {/* Optional subtle logo reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 text-center"
        >
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Model Studio Cooperative
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}