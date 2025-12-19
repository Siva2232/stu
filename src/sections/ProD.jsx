import { useState, useEffect } from "react";
import Container from "../components/common/Container";
import { motion } from "framer-motion";
import { Search, X, ArrowRight, ChevronDown } from "lucide-react";

const categories = ["ALL WORK", "EDITORIAL", "BEAUTY", "LIFESTYLE", "COMMERCIAL"];

const allPortfolioItems = [
  { id: 1, title: "Urban Edge Series", client: "Vogue Paris", category: "EDITORIAL", size: "lg", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90" },
  { id: 2, title: "Enchanted Series", client: "Gucci Beauty", category: "BEAUTY", size: "md", img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&q=90" },
  { id: 3, title: "Facing the Wind", client: "Nike", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1517841905240-472988bab751?w=1200&q=90" },
  { id: 4, title: "Sunset Glow", client: "Chanel", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1483985988355-763728e19348?w=1200&q=90" },
  { id: 5, title: "Night Glow", client: "L'Oréal Paris", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90" },
  { id: 6, title: "Amsterdam Streets", client: "Calvin Klein", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=1200&q=90" },
  { id: 7, title: "Ethereal Echoes", client: "Dior", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1496747650943-ccc9e75751a6?w=1200&q=90" },
  { id: 8, title: "Minimal Rebellion", client: "Zara", category: "COMMERCIAL", size: "lg", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90" },
  { id: 9, title: "Autumn’s Blaze", client: "Burberry", category: "LIFESTYLE", size: "sm", img: "https://images.unsplash.com/photo-1470229722913-1d0399a6c3e9?w=1200&q=90" },
  { id: 10, title: "Rue Victor Smart", client: "Louis Vuitton", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=90" },
  { id: 11, title: "Full-Length Moment", client: "Prada", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=90" },
  { id: 12, title: "Curveside", client: "H&M", category: "COMMERCIAL", size: "sm", img: "https://images.unsplash.com/photo-1581338832824-66db8c7c5a3d?w=1200&q=90" },
  { id: 13, title: "Golden Hour Dreams", client: "Yves Saint Laurent", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1517841905240-472988bab751?w=1200&q=90" },
  { id: 14, title: "City Pulse", client: "Adidas Originals", category: "LIFESTYLE", size: "md", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200&q=90" },
  { id: 15, title: "Noir Elegance", client: "Givenchy", category: "EDITORIAL", size: "lg", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90" },
  { id: 16, title: "Fresh Canvas", client: "MAC Cosmetics", category: "BEAUTY", size: "sm", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=90" },
  { id: 17, title: "Street Symphony", client: "Supreme", category: "COMMERCIAL", size: "md", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=1200&q=90" },
  { id: 18, title: "Desert Rose", client: "Tom Ford", category: "BEAUTY", size: "lg", img: "https://images.unsplash.com/photo-1508186225823-0963cf9a3005?w=1200&q=90" },
  { id: 19, title: "Runway Rebels", client: "Balenciaga", category: "EDITORIAL", size: "md", img: "https://images.unsplash.com/photo-1539109136881-3d8f7e8d8b3a?w=1200&q=90" },
  { id: 20, title: "Everyday Icons", client: "Levi's", category: "COMMERCIAL", size: "sm", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&q=90" },
];

const clientLogos = ["Vogue", "Gucci", "Nike", "Chanel", "Dior", "Zara", "Louis Vuitton", "Prada", "YSL", "Adidas", "Calvin Klein", "Burberry"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleItems, setVisibleItems] = useState(12); // For "Load More"

  const filteredItems = allPortfolioItems.filter((item) => {
    const matchesCategory = activeCategory === "ALL WORK" || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedItems = filteredItems.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=2400&q=90"
            alt="High fashion editorial shoot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            OUR WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-3xl lg:text-4xl font-light max-w-5xl mx-auto mb-12 text-gray-100"
          >
            Campaigns that redefine beauty, diversity, and creativity — in partnership with the world’s leading brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="bg-amber-500 text-black px-14 py-7 text-2xl font-bold rounded-full hover:bg-amber-400 transition shadow-2xl inline-flex items-center gap-4">
              EXPLORE ALL CAMPAIGNS <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Clients */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 text-lg mb-10">TRUSTED BY THE WORLD'S LEADING BRANDS</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-2xl md:text-3xl font-black text-center">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-amber-400"
            >
              500+
            </motion.div>
            <p className="mt-4 text-xl">Campaigns Delivered</p>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-amber-400"
            >
              150+
            </motion.div>
            <p className="mt-4 text-xl">Global Clients</p>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-amber-400"
            >
              5K+
            </motion.div>
            <p className="mt-4 text-xl">Reach Generated</p>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-amber-400"
            >
              100%
            </motion.div>
            <p className="mt-4 text-xl">Inclusive Casting</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <Container className="px-6 md:px-12 lg:px-20">
          {/* Header + Filters */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">SELECTED CAMPAIGNS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showing <span className="font-bold text-amber-600">{displayedItems.length}</span> of {filteredItems.length} projects
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleItems(12);
                  }}
                  className={`relative text-lg md:text-xl font-medium pb-3 transition-colors ${
                    activeCategory === cat ? "text-black" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="portfolioTab"
                      className="absolute left-0 right-0 bottom-0 h-1 bg-amber-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
              <input
                type="text"
                placeholder="Search by client or campaign..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-5 rounded-full border-2 border-gray-300 focus:border-amber-500 focus:outline-none text-lg transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                  <X size={22} />
                </button>
              )}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 auto-rows-[220px] md:auto-rows-[300px]">
            {displayedItems.map((item, index) => {
              const rowSpan = item.size === "lg" ? "row-span-2" : "row-span-1";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.7 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 ${rowSpan}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-115"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-600">
                    <p className="text-sm md:text-base uppercase tracking-widest text-amber-400 font-semibold mb-2">
                      {item.client}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center mt-4 text-sm md:text-base font-medium hover:text-amber-400 transition">
                      View Campaign <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                    {item.category}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More or Empty State */}
          {displayedItems.length === 0 ? (
            <div className="text-center py-40">
              <p className="text-3xl font-light text-gray-500 mb-8">No campaigns match your search.</p>
              <button
                onClick={() => {
                  setActiveCategory("ALL WORK");
                  setSearchQuery("");
                  setVisibleItems(12);
                }}
                className="text-amber-600 hover:text-amber-500 font-bold text-xl"
              >
                Clear Filters
              </button>
            </div>
          ) : visibleItems < filteredItems.length ? (
            <div className="text-center mt-20">
              <button
                onClick={loadMore}
                className="bg-black text-white px-12 py-6 text-xl font-bold rounded-full hover:bg-gray-800 transition shadow-2xl inline-flex items-center gap-4"
              >
                LOAD MORE CAMPAIGNS <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          ) : null}
        </Container>
      </section>
    </div>
  );
}