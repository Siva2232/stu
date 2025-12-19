import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

export default function ContactPage() {
  return (
    <section className="bg-black min-h-screen py-32">
      <Container>
        <SectionTitle
          label="Contact"
          title="Let’s Talk About Your Project"
          description="Tell us about your idea and we’ll get back to you shortly."
        />

        <form className="max-w-xl mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
          />

          <textarea
            rows="5"
            placeholder="Project Details"
            className="w-full bg-transparent border border-white/15 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
          />

          <Button size="lg">Send Message</Button>
        </form>
      </Container>
    </section>
  );
}
