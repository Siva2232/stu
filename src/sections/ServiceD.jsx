import React, { useRef } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Sparkles, Flower2, Diamond, ArrowRight } from "lucide-react";

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0.75]);

  const services = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Full Wedding Day Coverage",
      subtitle: "Every Moment, Beautifully Captured",
      description:
        "From getting ready to the last dance — we document your entire love story with artistry and heart.",
      features: [
        "8–12 Hours of Continuous Coverage",
        "Two Professional Photographers",
        "Engagement Session Included",
        "Online Gallery + Digital Downloads",
        "Timeline Planning & Coordination",
        "Sneak Peeks Within 48 Hours",
      ],
      images: [
        "https://thelane.com/wp-content/uploads/2022/02/Sophie-Tim-Reedit-4-scaled.jpg",
        "https://susanstripling.com/wp-content/uploads/2024/01/08-oheka-castle-wedding-nighttime-sunset-wedding-photo-bride-and-groom.jpg",
        "https://jaidynmichele.com/wp-content/uploads/sites/32630/2023/05/BZ7A0337-1024x719.jpg",
        "https://www.printique.com/wp-content/uploads/2019/06/wedding-poses-3.jpg",
        "https://whimsical-cdn.wedissimo.com/2025/11/Black-and-White-Wedding-Photos.jpg",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      ],
      ctaText: "VIEW PACKAGES",
      highlighted: true,
    },
    {
      icon: <Diamond className="w-10 h-10" />,
      title: "Engagement & Bridal Sessions",
      subtitle: "Celebrate Your Love Before the Big Day",
      description:
        "Timeless portraits that capture your unique connection — perfect for save-the-dates and wall art.",
      features: [
        "2–3 Hour Custom Session",
        "Multiple Locations & Outfit Changes",
        "Professional Hair & Makeup Option",
        "Fine Art Prints & Albums Available",
        "Perfect for Save-the-Dates",
        "Relaxed, Fun Experience",
      ],
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
        "https://images.unsplash.com/photo-1606216793598-2f4e56cccd6f?w=1200&q=80",
        "https://images.unsplash.com/photo-1569336624492-9b14d1b4e375?w=1200&q=80",
        "https://images.unsplash.com/photo-1606800052051-9c6e9b6d2e87?w=1200&q=80",
        "https://images.unsplash.com/photo-1606800051795-8c5e6c3d2d9f?w=1200&q=80",
      ],
      ctaText: "BOOK ENGAGEMENT SESSION",
    },
    {
      icon: <Flower2 className="w-10 h-10" />,
      title: "Luxury Albums & Prints",
      subtitle: "Heirlooms You'll Cherish Forever",
      description:
        "Handcrafted fine art albums and wall art designed to preserve your memories for generations.",
      features: [
        "Custom Designed Lay-Flat Albums",
        "Archival Quality Printing",
        "Italian Leather & Linen Covers",
        "Parent Albums Available",
        "Museum-Grade Wall Art",
        "Lifetime Guarantee",
      ],
      images: [
        "https://images.unsplash.com/photo-1606983341444-36a2b76cf2f3?w=1200&q=80",
        "https://images.unsplash.com/photo-1606819717116-9d97b2c0de74?w=1200&q=80",
        "https://images.unsplash.com/photo-1627483262356-0045a8a0683b?w=1200&q=80",
        "https://images.unsplash.com/photo-1606216793598-2f4e56c1e9ac?w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      ],
      ctaText: "EXPLORE ALBUMS",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <div
        ref={heroRef}
        className="relative pt-16 h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden"
      >
        <motion.div
          style={{ y: yParallax, scale: scaleParallax }}
          className="absolute inset-0"
        >
          <img
            src="https://susanstripling.com/wp-content/uploads/2024/01/08-oheka-castle-wedding-nighttime-sunset-wedding-photo-bride-and-groom.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacityParallax }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"
        />

        <Container className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight"
            >
              Your Love Story <br />
              <span className="text-yellow-400">Deserves the Best</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl lg:text-2xl text-gray-200 mb-10"
            >
              Timeless wedding photography capturing emotion, beauty, and unforgettable moments.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full px-8 py-5 text-lg font-bold bg-yellow-500 text-black hover:bg-yellow-400">
                VIEW OUR WORK
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-black"
              >
                CHECK AVAILABILITY
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* SERVICES */}
      <Container className="py-20 md:py-28 lg:py-32 -mt-20 relative z-20">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Crafted With <span className="text-yellow-400">Heart</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Limited bookings each year ensure our full dedication to every couple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                  service.highlighted
                    ? "ring-4 ring-yellow-400 ring-offset-4"
                    : ""
                }`}
              >
                {/* Header */}
                <div className="p-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-4">{service.subtitle}</p>
                  <p className="text-gray-700">{service.description}</p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-3 gap-3 p-6 bg-gray-50">
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-2xl"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-110 transition"
                      />
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="p-10">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <Sparkles className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                        <span className="text-lg">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full py-5 text-lg font-bold flex items-center justify-center gap-3 ${
                      service.highlighted
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {service.ctaText}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
