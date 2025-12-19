import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-neutral-50 via-white to-neutral-100 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 blur-[120px] rounded-full" />
      </div>

      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Join Our Creative Community
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600">
            Connect, collaborate, and grow your career with like-minded creators.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[40px] bg-white/80 backdrop-blur-2xl border border-black/5 shadow-[0_40px_120px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-14 items-center p-10 md:p-14 lg:p-20">

              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <div className="h-[320px] md:h-[420px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">
                      Community Image
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Content */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Let’s Build Something <br /> Meaningful Together
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Whether you’re a creator, collaborator, or partner — we’d love to hear from you.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <Button
                    variant="ghost"
                    className="rounded-full px-10 py-5 text-lg font-bold
                               bg-white text-black border border-black/10
                               shadow-lg hover:shadow-2xl
                               hover:bg-white transition-all"
                  >
                    Contact Us
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>

                  <a
                    href="/faqs"
                    className="text-gray-700 text-lg underline underline-offset-4 hover:text-black transition"
                  >
                    View FAQs
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "(555) 123-667",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@studio.com",
                link: "mailto:info@studio.com",
              },
              {
                icon: MapPin,
                label: "Visit",
                value: "123 Studio Lane, Creativity City",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white border border-black/5 p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition">
                  <item.icon className="w-6 h-6 text-gray-800" />
                </div>
                <p className="text-sm text-gray-500">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-1 block font-semibold text-gray-900 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-gray-900">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
