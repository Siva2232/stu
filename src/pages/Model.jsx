import React, { useState } from 'react';
import { Search, Instagram, ArrowRight, Menu, X } from "lucide-react";

// Realistic client work / campaign data with real-looking images
const works = [
  {
    id: 1,
    client: "Nike Global",
    campaign: "Move Together 2025",
    description: "Inclusive athletic campaign featuring diverse MSC talent across sports and lifestyles.",
    models: ["Luna Voss", "Amina Soleil", "Sofia Reyes"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 2,
    client: "Vogue Paris",
    campaign: "Beauty in Diversity",
    description: "Editorial spread celebrating global beauty standards with non-traditional models.",
    models: ["Kai Rivera", "Zara Kim", "Nia Okoro"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    client: "Gucci",
    campaign: "Eternal Youth",
    description: "High-fashion campaign blending street style with luxury for the new generation.",
    models: ["Theo Marx", "Freya Lind", "Jaden Cole"],
    image: "https://images.unsplash.com/photo-1539109136881-3d8f7e8d8b3a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    client: "Adidas",
    campaign: "Impossible Is Nothing",
    description: "Empowering stories of athletes breaking barriers, shot in urban environments.",
    models: ["Elias Nova", "Amir Khan", "Sofia Reyes"],
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 5,
    client: "L'Oréal Paris",
    campaign: "Because You're Worth It",
    description: "Beauty campaign highlighting natural diversity and self-confidence.",
    models: ["Luna Voss", "Zara Kim", "Nia Okoro"],
    image: "https://images.unsplash.com/photo-1524504388944-b5a0099b3d6c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 6,
    client: "Calvin Klein",
    campaign: "Modern Cotton",
    description: "Minimalist lifestyle shoot focusing on comfort and authenticity.",
    models: ["Mateo Silva", "Kai Rivera", "Amina Soleil"],
    image: "https://images.unsplash.com/photo-1483985988367-3f5b3840f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070",
  },
];

export default function Works() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = works.filter(work =>
    work.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    work.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
    work.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-950 opacity-90"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-8 leading-none">
            Our Work.<br />
            <span className="text-amber-400">Real Impact.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Campaigns and collaborations with leading global brands — powered by diverse, authentic talent.
          </p>
          <button className="bg-amber-500 text-black px-10 py-5 text-xl font-bold hover:bg-amber-400 transition shadow-2xl">
            BOOK TALENT FOR YOUR PROJECT
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={24} />
              <input
                type="text"
                placeholder="Search campaigns, clients, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-5 text-lg rounded-full border-2 border-gray-300 focus:border-amber-500 focus:outline-none transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">CLIENT WORK & CAMPAIGNS</h2>
            <p className="text-xl text-gray-600">Selected projects showcasing our talent in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredWorks.map((work) => (
              <div key={work.id} className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.campaign}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm uppercase tracking-wider text-amber-400 font-medium">{work.client}</p>
                    <h3 className="text-2xl md:text-3xl font-black mt-1">{work.campaign}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{work.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Featured Talent: {work.models.join(", ")}
                  </p>
                  <a href="#" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition">
                    View Campaign Details <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <p className="text-center py-20 text-2xl text-gray-500">
              No campaigns found. Try a different search term.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-amber-600 to-amber-700 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-10">YOUR PROJECT NEXT?</h2>
          <p className="text-2xl mb-16 max-w-4xl mx-auto">
            Let's create something extraordinary together. Book our talent for your next campaign.
          </p>
          <button className="bg-black text-white px-16 py-8 text-2xl font-bold hover:bg-gray-900 transition shadow-2xl">
            START A PROJECT <ArrowRight className="inline ml-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}