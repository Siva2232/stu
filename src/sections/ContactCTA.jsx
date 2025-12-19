import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Phone, Mail, MapPin } from "lucide-react"; // Optional: nice icons

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
      <Container>
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide">
            Join Our Creative Community
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Connect, Collaborate, and Grow Your Career
          </p>
        </div>

        {/* Card with Image + CTA */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-beige-100 to-beige-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
              {/* Image Section */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  {/* Replace with real image when available */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-80 md:h-full min-h-64 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Group Photo Placeholder</span>
                  </div>
                  {/* <img
                    src="/images/community-group.jpg"
                    alt="Creative team collaborating"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <Button
                    variant="dark"
                    size="xl"
                    className="rounded-full px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    CONTACT US →
                  </Button>

                  <p className="mt-6 text-gray-700 text-lg">
                    Or, explore our <a href="/faqs" className="underline hover:text-gray-900">FAQs</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-gray-600 text-sm">Call Us:</p>
              <p className="text-gray-900 font-medium">(555) 123-667</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-gray-600 text-sm">Email:</p>
              <a href="mailto:info@stmdio.com" className="text-gray-900 font-medium hover:underline">
                info@stmdio.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-gray-600 text-sm">Visit Us:</p>
              <p className="text-gray-900 font-medium">123 Studio Lane, Creativity City</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}