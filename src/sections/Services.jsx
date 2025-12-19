import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Camera, Users, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "For Models",
      subtitle: "Build Your Brand. Expand a Network.",
      features: [
        "Portfolio Development",
        "Workshops, Networking Events",
        "Industry Connections",
        "Job Board Access",
      ],
      images: [
        "https://media.gettyimages.com/id/493837244/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=gi&k=20&c=uV2U9seF0GZoUbmc9Sr9vqx6Q0niUC1eliVGuGaKK8U=",
        "https://www.oxanaalexphotography.com/wp-content/uploads/2023/04/modeling-poses-1.jpg",
      ],
            cta: true,
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photographers",
      subtitle: "Access Talent. Creative Spaces.",
      features: [
        "Talent Booking",
        "Studio Rental",
        "Equipment Access",
        "Post-Production Support",
        "Collaborative Projects",
      ],
      images: [
        "https://stored-cf.slickpic.com/Mjg1ODI1MDZmMThjNTg,/20211226/MTgzMDE1MTVjOGM1/pn/400/ethereal-beauty-starry-makeup.jpg.webp",
        "https://media.gettyimages.com/id/636160600/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=gi&k=20&c=mwhPYT2LXuUotou23w8N7vd7EnKJNFsrTz0cALF1RHc=",
      ],
            cta: true,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brands & Creatives",
      subtitle: "Bring Your Vision to Life.",
      features: [
        "Full Production Services",
        "Casting",
        "Creative Direction",
        "Project Management",
      ],
      images: [
        "https://www.shutterstock.com/image-photo/confident-businesswoman-dressed-trendy-office-600nw-2634452557.jpg",
        "https://www.shutterstock.com/image-photo/fashion-model-black-leather-trench-260nw-2646154139.jpg",
      ],
      cta: true,
    },
  ];

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* Hero Banner with Studio Background */}
      <div className="relative h-96 md:h-[85vh] max-h-screen">
        {/* Real studio photoshoot background image */}
        <div className="absolute inset-0">
          <img
            src="https://blog.sigmaphoto.com/wp-content/uploads/2025/07/jillian-lenser-bf-01.jpg"
            alt="Behind the scenes fashion photography studio with models, photographers, and lighting"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <Container className="relative h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-200">
              Tailored Support for Your Creative Journey
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="mt-10 rounded-full px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white hover:text-black transition"
            >
              DISCOVER TALENT
            </Button>
          </div>
        </Container>
      </div>

      {/* Services Cards */}
      <Container className="-mt-20 relative z-10 pb-32">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500"
            >
              {/* Header */}
              <div className="p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-800 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">{service.subtitle}</p>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-4 px-10 pb-8">
                {service.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-md aspect-square"
                  >
                    <img
                      src={img}
                      alt={`${service.title} example ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="px-10 pb-10">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-gray-500 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {service.cta && (
                  <div className="mt-8">
                   <Button
  variant="ghost"
  size="lg"
  className="w-full rounded-full py-4 text-lg font-semibold
             bg-white text-black
             shadow-lg hover:shadow-xl
             hover:bg-white hover:text-black"
>
  EXPLORE PACKAGES →
</Button>

                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}