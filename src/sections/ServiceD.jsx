import React, { useState } from 'react';
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Camera, Users, Sparkles, Heart, Star, ArrowRight, Menu, X } from "lucide-react";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "For Aspiring & Professional Models",
      subtitle: "Empower Your Career. Build Lasting Success.",
      description: "Join a supportive cooperative community designed to nurture talent at every stage.",
      features: [
        "Professional Portfolio Development & Photoshoots",
        "Exclusive Workshops (Posing, Runway, Self-Taping)",
        "Networking Events & Industry Mixers",
        "Personalized Career Guidance & Mentorship",
        "Exclusive Job Board & Casting Access",
        "Fair Compensation & Contract Support",
      ],
      images: [
        "https://images.squarespace-cdn.com/content/v1/5324bbbce4b0aec88e8bb329/0fdd7284-8d3c-48f2-95d4-4333826d1107/The+Ultimate+Guide+To+Model+Poses+For+Clothing+E-Commerce+Studio+Photography.jpg",
        "https://www.ukmodels.co.uk/wp-content/uploads/2024/09/shutterstock_633673808-scaled.jpg",
        "https://static.wixstatic.com/media/d8afd1_620a9252e63449c78c0f7657a7789788~mv2.jpg/v1/fill/w_1000,h_526,al_c,q_85,usm_0.66_1.00_0.01/d8afd1_620a9252e63449c78c0f7657a7789788~mv2.jpg",
        "https://jcasablancas.com/wp-content/uploads/2024/07/Commercial-Modeling-vs.-Fashion-Modeling.webp",
        "https://skylarmodeling.com/wp-content/uploads/2024/08/Top-Modeling-Agencies.jpg",
        "https://aaft.com/blog/wp-content/uploads/2025/01/freepik__the-style-is-candid-image-photography-with-natural__7122-1024x701.jpg",
      ],
      ctaText: "APPLY AS A MODEL",
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "For Photographers & Creatives",
      subtitle: "Access Top Talent. Premium Resources.",
      description: "Everything you need to create stunning visuals in a professional environment.",
      features: [
        "Direct Talent Booking (Diverse Models)",
        "Fully Equipped Studio Rental (Lighting, Backdrops)",
        "Equipment Rental & Technical Support",
        "Post-Production Suites & Editing Assistance",
        "Collaborative Project Spaces",
        "Portfolio Building Opportunities",
      ],
      images: [
        "https://media.istockphoto.com/id/883100408/photo/professional-fashion-shoot.jpg?s=612x612&w=0&k=20&c=JLeW3yzok-hxOoeXHK9XFqjoK_m4GlNQVGruPKvIrgU=",
        "https://cdn9.dissolve.com/p/D2115_216_147/D2115_216_147_1200.jpg",
        "https://media.istockphoto.com/id/1621263988/photo/photographer-taking-photos-filming-a-young-model-woman-at-studio.jpg?s=612x612&w=0&k=20&c=5lFzyc_TfekoZZnVrL-oJFXs9-kwVzcJvZ_Cyb4vrBU=",
        "https://www.shutterstock.com/image-photo/professional-photographer-beautiful-model-on-260nw-718655110.jpg",
        "https://thumbs.dreamstime.com/b/professional-photography-studio-showing-behind-scenes-lights-fashion-handsome-young-man-model-light-flashes-standing-149938491.jpg",
      ],
      ctaText: "BOOK STUDIO OR TALENT",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "For Brands & Agencies",
      subtitle: "Full-Service Creative Production.",
      description: "From concept to campaign — inclusive casting and flawless execution.",
      features: [
        "Custom Casting for All Campaigns",
        "Complete Production Management",
        "Creative Direction & Mood Boards",
        "Diverse & Inclusive Talent Pool",
        "Location Scouting & Permits",
        "End-to-End Campaign Delivery",
      ],
      images: [
        "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3451382334438821451",
        "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3786623976035172852",
        "https://www.shutterstock.com/image-photo/photography-backstage-woman-styling-team-600nw-2603760457.jpg",
        "https://thumbs.dreamstime.com/b/photoshoot-stylist-people-studio-creative-pictures-fashion-magazine-production-backstage-artist-group-project-369476871.jpg",
        "https://theimpression.com/wp-content/uploads/2022/08/SME_220036_0060_112_2_v3_QC_FULL_sRGB_150-scaled.jpg",
      ],
      ctaText: "START A PROJECT",
      highlighted: true,
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Fixed Header */}
    
      {/* Hero Section */}
      <div className="relative pt-16 md:pt-0 h-[60vh] md:h-[80vh] lg:h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="https://techcloudltd.com/blog/wp-content/uploads/2023/08/Setting-Up-Your-Fashion-Photography-Studio-Tech-Cloud-Ltd.webp"
            alt="Professional fashion photography studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        <Container className="relative h-full flex items-center">
          <div className="w-full max-w-4xl text-white px-4 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-tight">
              Creative<br className="sm:hidden" /> Services<br />
              <span className="text-amber-400">Reimagined</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100">
              A cooperative ecosystem connecting models, photographers, and brands.
            </p>
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button
                variant="secondary"
                className="w-full sm:w-auto rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-xl font-bold border-2 border-white hover:bg-white hover:text-black transition shadow-lg"
              >
                EXPLORE SERVICES
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 py-4 md:px-10 md:py-5 text-base md:text-xl font-bold border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition"
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Container className="py-12 md:py-20 lg:py-32 -mt-12 md:-mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                service.highlighted ? 'lg:ring-4 lg:ring-amber-400 lg:-mt-8' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 md:p-8 lg:p-12 text-center bg-gradient-to-b from-gray-50 to-white">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                    service.highlighted ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">{service.subtitle}</p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 p-4 md:p-6 lg:p-8 bg-gray-50">
                {service.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-md aspect-square"
                  >
                    <img
                      src={img}
                      alt={`${service.title} example ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="px-6 md:px-8 lg:px-12 pb-6 md:pb-8 lg:pb-12">
                <ul className="space-y-3 md:space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-sm md:text-base lg:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 md:mt-8 lg:mt-10">
                <Button
  variant="ghost"
  className="w-full rounded-full py-4 md:py-5 text-base md:text-lg lg:text-xl font-bold
             bg-white text-black shadow-lg hover:shadow-2xl
             hover:bg-white hover:text-black"
>
  {service.ctaText}
  <ArrowRight className="inline ml-3" />
</Button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Stats & CTA */}
      <Container className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">Why Creators Choose Us</h2>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            A thriving cooperative built on trust, creativity, and shared success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          {[
            { number: "200+", label: "Active Models" },
            { number: "150+", label: "Photographers" },
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-500">{stat.number}</div>
              <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-xl text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center px-4">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Ready to Create Something Amazing?
          </h3>
          <Button
            variant="primary"
            className="rounded-full px-8 py-5 md:px-16 md:py-7 text-lg md:text-2xl font-bold shadow-2xl hover:shadow-3xl"
          >
            GET STARTED TODAY <Heart className="inline ml-3" />
          </Button>
        </div>
      </Container>
    </section>
  );
}