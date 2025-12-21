import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { MessageCircle, Globe, Zap, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Get in <span className="text-[#FFFF00]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Have a project or idea? Let’s discuss how we can bring it to life.
          </p>
        </motion.div>

        {/* Grid: Contact Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-7 h-7 text-[#FFFF00]" />
                Send a Message
              </h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFFF00] focus:outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFFF00] focus:outline-none transition"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFFF00] focus:outline-none transition resize-none"
                />
                <Button className="w-full py-4 rounded-lg bg-[#FFFF00] text-black font-bold hover:bg-[#FFFF00]/90 transition shadow-md">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Globe,
                  title: "Schedule a Call",
                  desc: "Book a 15-min discovery call instantly",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  desc: "hello@studio.com — replied within hours",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-[#FFFF00] flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fun Quote */}
            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <p className="italic text-gray-700">"The best projects start with a simple hello."</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}