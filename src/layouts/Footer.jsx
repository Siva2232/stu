import Container from "../components/common/Container";
import Logo from "../components/common/Logo";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const links = [
    "Home",
    "About",
    "Models",
    "Portfolio",
    "Services",
    "Careers",
    "Contact",
  ];

  const works = [
    "Editorial Noir",
    "Golden Hour",
    "Runway Edge",
    "Avant Garde",
    "Studio Minimal",
    "Beauty Focus",
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[360px] h-[360px] bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-purple-600/10 blur-[120px]" />
      </div>

      <Container className="relative z-10 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <Logo className="h-12 filter brightness-0 invert" />

            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              MODEL STUDIO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                COOPERATIVE
              </span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              A high-fashion creative collective shaping bold narratives in
              fashion, beauty, and visual culture.
            </p>

            <div className="flex gap-4 pt-1">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.12, y: -1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition"
                >
                  <social.icon className="w-4.5 h-4.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* WORK */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h3 className="text-xs tracking-widest text-yellow-500 uppercase mb-4">
              Recent Work
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {works.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur flex items-end p-2"
                >
                  <span className="text-[11px] text-gray-400">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NAV + CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-10"
          >
            {/* NAV */}
            <div>
              <h3 className="text-xs tracking-widest text-gray-500 uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="group flex items-center justify-between text-sm text-gray-400 hover:text-yellow-400 transition"
                    >
                      {link}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-3 text-sm text-gray-400">
              <h3 className="text-xs tracking-widest text-gray-500 uppercase mb-3">
                Contact
              </h3>

              <a
                href="mailto:hello@modelstudio.coop"
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <Mail className="w-4 h-4 text-yellow-500" />
                hello@modelstudio.coop
              </a>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                +1 (555) 987-6543
              </p>

              <p className="flex items-start gap-2 leading-snug">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5" />
                123 Creative District, LA
              </p>
            </div>
          </motion.div>
        </div>

        {/* BASE */}
        <div className="mt-14 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Model Studio Cooperative</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
