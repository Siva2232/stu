import Container from "../components/common/Container";
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
import hhhh from '../assets/hhhh.jpg';

export default function Footer() {
  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Models", href: "/models" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];


  const works = [
    "Editorial Noir",
    "Golden Hour",
    "Runway Edge",
    "Avant Garde",
    "Studio Minimal",
    "Beauty Focus",
  ];

  // Optimized responsive letter animation
  const companyName = "PERFECT DIGITAL PRESS";
  const letters = Array.from(companyName);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 180,
      },
    },
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Static subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-yellow-500/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-[350px] h-[350px] bg-purple-600/8 blur-[140px] rounded-full" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">

          {/* BRAND + LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0"
            >
              <img
                src={hhhh}
                alt="Perfect Digital Press Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="text-center lg:text-left px-4 lg:px-0">
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                A high-fashion creative collective shaping bold narratives in
                fashion, beauty, and visual culture.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 md:gap-6">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 shadow-lg"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RECENT WORK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h3 className="text-xs tracking-widest text-yellow-500 uppercase mb-6 md:mb-8 font-medium text-center lg:text-left">
              Recent Work
            </h3>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {works.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className="aspect-square rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-end p-3 md:p-4 hover:border-yellow-500/30 transition-all duration-400"
                >
                  <span className="text-xs md:text-sm text-gray-300 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NAV + CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-10 md:space-y-12"
          >
            <div>
              <h3 className="text-xs tracking-widest text-gray-500 uppercase mb-6 md:mb-8 font-medium text-center lg:text-left">
                Navigation
              </h3>
              <ul className="space-y-4 md:space-y-5 text-center lg:text-left">
               {links.map((link, i) => (
  <motion.li
    key={link.label}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.06 }}
  >
    <a
      href={link.href}
      className="group flex items-center justify-center lg:justify-start
                 text-base md:text-lg text-gray-400
                 hover:text-yellow-400 transition-all duration-300"
    >
      {link.label}
      <ArrowUpRight
        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100
                   translate-x-2 group-hover:translate-x-0 transition-all"
      />
    </a>
  </motion.li>
))}

              </ul>
            </div>

            <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-400 text-center lg:text-left">
              <h3 className="text-xs tracking-widest text-gray-500 uppercase mb-5 md:mb-6 font-medium">
                Contact
              </h3>

              <a
                href="mailto:hello@modelstudio.coop"
                className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 hover:text-yellow-400 transition"
              >
                <Mail className="w-5 h-5 text-yellow-500" />
                hello@modelstudio.coop
              </a>

              <p className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                <Phone className="w-5 h-5 text-yellow-500" />
                +1 (555) 987-6543
              </p>

              <p className="flex items-start justify-center lg:justify-start gap-3 md:gap-4 leading-relaxed">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  123 Creative District<br />
                  Los Angeles, CA 90013
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* LARGE RESPONSIVE BOTTOM TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 md:mt-32 lg:mt-40 text-center overflow-hidden px-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none font-black tracking-tight">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={`inline-block ${
                  letter === " " 
                    ? "w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16" 
                    : ""
                }`}
                style={{ 
                  textShadow: "0 4px 20px rgba(250, 204, 21, 0.3)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Responsive animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8 md:mt-12 opacity-80 max-w-4xl"
          />
        </motion.div>

        {/* Copyright & Legal */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-gray-500 px-4">
          <p>© {new Date().getFullYear()} Perfect Digital Press. All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}