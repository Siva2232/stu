import { useState } from "react";
import Container from "../components/common/Container";
import { motion } from "framer-motion";

const categories = ["ALL WORK", "EDITORIAL", "BEAUTY", "LIFESTYLE", "COMMERCIAL"];

const portfolioItems = [
  { id: 1, title: "Urban Edge Series", author: "by Aida Chen", category: "EDITORIAL", size: "lg", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" },
  { id: 2, title: "Enchanted Series", author: "by Alex Chen", category: "BEAUTY", size: "md", img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80" },
  { id: 3, title: "Facing the Wind", author: "by Alex Chen", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1517841905240-472988bab751?w=800&q=80" },
  { id: 4, title: "Sunset Glow", author: "by Aida Chen", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1483985988355-763728e19348?w=800&q=80" },
  { id: 5, title: "Night Glow", author: "by Aida Chen", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  { id: 6, title: "Amsterdam Streets", author: "by Alex Chen", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80" },
  { id: 7, title: "Ethereal Echoes", author: "by Aida Chen", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1496747650943-ccc9e75751a6?w=800&q=80" },
  { id: 8, title: "Minimal Rebellion", author: "by Alice Chen", category: "COMMERCIAL", size: "lg", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
  { id: 9, title: "Autumn’s Blaze", author: "by Alice Chen", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1470229722913-1d0399a6c3e9?w=800&q=80" },
  { id: 10, title: "Rue Victor Smart", author: "by Alice Chen", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80" },
  { id: 11, title: "Full-Length Moment", author: "by Alex Chen", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80" },
  { id: 12, title: "Curveside", author: "by Alex Chen", category: "COMMERCIAL", size: "sm", img: "https://images.unsplash.com/photo-1581338832824-66db8c7c5a3d?w=800&q=80" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");

  const filteredItems =
    activeCategory === "ALL WORK"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-[#fafafa]">
      <Container className="px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-left max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight"
          >
            OUR PORTFOLIO. DISCOVER INSPIRATION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
          >
            Explore the work of our talented community members
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-16 md:mb-20 border-b border-gray-300 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative text-sm md:text-base font-medium tracking-wider text-gray-600 hover:text-black transition-colors duration-300 pb-2"
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {filteredItems.map((item, index) => {
            const rowSpan =
              item.size === "lg" ? "row-span-2" :
              item.size === "md" ? "row-span-1" :
              "row-span-1"; // sm also row-span-1

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ${rowSpan}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title & Author - Slide Up on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mt-1">
                    {item.author}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}