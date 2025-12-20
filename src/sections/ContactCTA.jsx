import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { MessageCircle, Sparkles, Send, Globe, Zap, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle yellow glow background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-300/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-yellow-400/25 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-200/20 rounded-full" />
      </div>

      <Container>
        {/* Hero Heading */}
        <div className="text-center max-w-5xl mx-auto mb-24 relative z-10">
          <div className="inline-flex items-center gap-3 bg-yellow-100 rounded-full px-6 py-3 mb-8 border border-yellow-300">
            <Sparkles className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Ready to bring your ideas to life?</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900">
            Let's Start a <span className="text-yellow-500">Conversation</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your vision deserves the perfect creative partner. Reach out — we're excited to hear from you.
          </p>
        </div>

        {/* Main CTA Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left: Contact Form */}
          <div className="relative">
            <div className="rounded-3xl bg-white border-2 border-yellow-200 p-10 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <MessageCircle className="w-9 h-9 text-yellow-500" />
                Say Hello
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition resize-none"
                  />
                </div>
                <Button
                  className="w-full rounded-xl py-5 text-lg font-bold bg-yellow-500 hover:bg-yellow-400 text-gray-900 transition-all shadow-lg hover:shadow-yellow-200/50 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right: Quick Contact & Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                <Zap className="w-10 h-10 text-yellow-500" />
                Instant Ways to Reach Us
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: "Schedule a Call",
                    desc: "Book a 15-min discovery call instantly",
                    action: "Open Calendar →",
                  },
                  {
                    icon: MessageCircle,
                    title: "Live Chat",
                    desc: "Chat with us right now — we're online",
                    action: "Start Chat →",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    desc: "hello@studio.com — replied within hours",
                    action: "Write Email →",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl bg-yellow-50 border border-yellow-200 p-6 hover:bg-yellow-100 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-xl bg-yellow-500 shadow-lg">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 mb-3">{item.desc}</p>
                        <p className="text-yellow-700 font-medium group-hover:underline">
                          {item.action}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun note */}
            <div className="rounded-2xl bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 p-8 text-center">
              <p className="text-lg italic text-gray-700">
                "Great ideas start with a simple hello. We're ready when you are."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}