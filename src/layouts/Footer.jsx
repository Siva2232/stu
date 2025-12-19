import Container from "../components/common/Container";
import Logo from "../components/common/Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">

          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm">
              We build high-performance digital experiences for modern brands.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">hello@studiopress.com</p>
            <p className="text-sm mt-2">+91 90000 00000</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StudioPress. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
