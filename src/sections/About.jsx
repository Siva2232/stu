import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function About() {
  return (
    <>
      {/* ===== HERO / STUDIO MANIFESTO ===== */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/0016/9243/4534/files/alexander-dummer-as4duj2j7r4-unsplash.jpg?v=1707237388')",
          }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <Container className="relative z-10 flex min-h-screen items-center px-6">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-xs tracking-[0.35em] uppercase text-yellow-400"
            >
              About The Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[clamp(3.2rem,6vw,6.8rem)] font-black leading-[1.05] text-white"
            >
              A Space Built <br />
              for <span className="text-yellow-400">Visual Truth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 max-w-xl text-lg text-white/70"
            >
              We are a premium photography studio where models, photographers,
              and creatives collaborate to craft timeless editorial imagery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <Button className="bg-yellow-400 text-black px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition">
                Explore Our Work
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400"
        >
          <ChevronDown size={32} />
        </motion.div> */}
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-28 bg-black">
        <Container>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10">
                Crafted Through <br />
                <span className="text-yellow-400">Collaboration</span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                The studio was founded to remove barriers in creative production.
                We believe strong imagery is born when people feel respected,
                inspired, and free to create together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-3xl overflow-hidden border border-yellow-400/30"
            >
              <img
                src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg"
                alt="Studio Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== TEAM / PHOTO EXHIBITION ===== */}
      <section className="py-32 bg-black">
        <Container>
          <h2 className="text-5xl md:text-6xl font-black text-center text-white mb-20">
            The <span className="text-yellow-400">People</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-20">
            {[
              {
                name: "Jane Doe",
                role: "Founder / Creative Director",
                img: "https://thumbs.dreamstime.com/b/beautiful-african-american-business-woman-portrait-arms-folded-confident-happy-ceo-cheerful-smiling-businesswoman-corporate-162367854.jpg",
              },
              {
                name: "John Smith",
                role: "Studio Operations",
                img: "https://images.squarespace-cdn.com/content/v1/50dc8dc3e4b015296cd6e95d/1739842537781-9040UJ508VY6GXNRX8DB/professional-headshot-san-ramon-business-man.jpg",
              },
              {
                name: "Sarah Chen",
                role: "Creative Lead",
                img: "https://www.shutterstock.com/image-photo/headshot-closeup-portrait-beautiful-successful-600nw-2639467661.jpg",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <div className="overflow-hidden rounded-3xl border border-yellow-400/30">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>
                <h4 className="mt-8 text-2xl font-bold text-white">
                  {member.name}
                </h4>
                <p className="text-yellow-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
