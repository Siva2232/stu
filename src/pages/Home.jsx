import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
