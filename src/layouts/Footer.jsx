import { useState } from "react";
import Container from "../components/common/Container";
import Logo from "../components/common/Logo";
import Button from "../components/common/Button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <div className="text-lg font-bold">G</div>, label: "Google", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "Models",
    "Services",
    "Portfolio",
    "Join Us",
    "Blog",
    "FAQ",
    "Careers",
    "Contact",
  ];

  const recentShoots = [
    { id: 1, alt: "Editorial model in dramatic lighting" },
    { id: 2, alt: "Beauty close-up with artistic makeup" },
    { id: 3, alt: "Fashion runway pose" },
  ];

  return (
    <footer className="relative bg-black text-white pt-32 pb-16 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent blur-3xl animate-pulse" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Brand & Recent Work */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <Logo className="h-12 mb-6 filter brightness-0 invert" />
              <h3 className="text-3xl font-black tracking-tight">
                MODEL STUDIO <span className="text-yellow-500">COOPERATIVE</span>
              </h3>
              <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
                Empowering Creativity. Fostering Community. A collaborative space
                where models, photographers, and brands create extraordinary
                visual stories.
              </p>
            </div>

            {/* Recent Portfolio Previews */}
            <div>
              <p className="text-sm uppercase tracking-wider text-yellow-500 font-medium mb-4">
                Latest Shoots
              </p>
              <div className="grid grid-cols-3 gap-4">
                {recentShoots.map((shoot) => (
                  <div
                    key={shoot.id}
                    className="aspect-square rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500 text-xs group-hover:text-yellow-500 transition">
                        {shoot.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:scale-110 transition-all duration-300 group"
                >
                  <span className="group-hover:text-yellow-400 transition">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Center Column - Navigation & Contact */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-yellow-500" />
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:text-yellow-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-500" />
                <a
                  href="mailto:info@stmdio.com"
                  className="hover:text-yellow-400 transition"
                >
                  info@stmdio.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-500" />
                (555) 123-467
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5" />
                1555 Studio Lane<br />
                Creativity City, CC 90210
              </p>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="md:col-span-3">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="text-2xl font-bold">STAY CONNECTED</h4>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Get exclusive behind-the-scenes, casting calls, workshop invites,
                and creative inspiration delivered monthly.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black rounded-full py-4 font-bold text-lg hover:from-yellow-400 hover:to-amber-400 hover:scale-105 transition-all shadow-xl"
                >
                  {subscribed ? "✓ Subscribed!" : "SUBSCRIBE →"}
                </Button>
              </form>

              {subscribed && (
                <p className="text-yellow-400 text-sm mt-4 text-center animate-pulse">
                  Thank you! Welcome to the collective ✨
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition">
              Cookie Policy
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MODEL STUDIO COOPERATIVE. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </Container>
    </footer>
  );
}