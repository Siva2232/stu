import { useState } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, BookOpen } from "lucide-react";

const bookPages = [
  // High-quality open fashion lookbook/magazine spreads with models
  "https://www.qinprinting.com/wp-content/uploads/2023/11/How-to-design-a-fashion-Lookbook.jpg",
  "https://tint.creativemarket.com/osxOgNL0eRmABvZB978DpC7R75F0Kps22Xa9Ses3ESk/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUxMjMvNTEyMzcvNTEyMzc4MjMvMDgtby5qcGcjMTcyMzA5NDg3OQ?1723094879",
  "https://i0.wp.com/xirimirimagazine.com/wp-content/uploads/2024/10/Fashion_Photography_Portfolio.jpg?fit=1200%2C628&ssl=1",
  "https://tint.creativemarket.com/LAiv0G-LlIef4GokSNcHaWLU_awfya0aowFB-hMeT70/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUyMTgvNTIxODcvNTIxODc1ODYvMDEtcXVpbm4tcG9ydGZvbGlvLSUyOGxvb2tib29rLW1hZ2F6aW5lJTI5LXRlbXBsYXRlLWJ5LXN0dWRpby1kYXJhLW8uanBnIzE3MzI1MjczMzA?1732527330",
  "https://designworklife.com/wp-content/uploads/2025/03/lookbook-hero-shot.png",
  "https://assets.vogue.com/photos/610a7f1a159535dcd92adfb9/master/w_2560%2Cc_limit/vo0921_cover_4x5_logo_spread.jpg",
];

export default function HeroBook() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % bookPages.length);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + bookPages.length) % bookPages.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Subtle Paper Texture Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"200\" height=\"200\" filter=\"url(%23noise)\" opacity=\"0.4\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Book Container */}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8 text-yellow-500"
        >
          <BookOpen className="w-10 h-10" />
          <p className="text-sm uppercase tracking-[0.4em] font-medium">
            Model Studio Cooperative Portfolio
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl">
          {/* Book Shadow for Depth */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent blur-3xl" />

          {/* Current Page */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ rotateY: 80, opacity: 0, scale: 0.9 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -80, opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative mx-auto aspect-[16/10] max-h-[80vh] rounded-3xl overflow-hidden shadow-4xl"
              style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
            >
              <img
                src={bookPages[page]}
                alt={`Portfolio page ${page + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Page Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-5xl md:text-7xl font-black text-white leading-tight"
                >
                  Curated <br />
                  <span className="text-yellow-500">Excellence</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 max-w-xl text-xl text-white/80"
                >
                  Turn the pages of our collaborative artistry — where models, photographers, and creatives craft timeless editorial stories.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-10 flex flex-wrap gap-6"
                >
                  <Button className="bg-yellow-500 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-yellow-400 hover:scale-105 transition-all shadow-2xl">
                    Explore Portfolio
                  </Button>
                  <Button className="border-2 border-yellow-500/60 text-white px-12 py-5 rounded-full text-xl backdrop-blur hover:bg-yellow-500/10 transition-all">
                   Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Page Number Indicator */}
          {/* <div className="mt-8 text-center text-white/60 text-sm tracking-wider">
            Page {page + 1} / {bookPages.length}
          </div> */}

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition shadow-lg"
            aria-label="Previous page"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition shadow-lg"
            aria-label="Next page"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </Container>

      {/* Scroll Cue - "Turn the page" */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <ChevronDown size={40} className="text-yellow-500 mx-auto drop-shadow-lg" />
        <p className="text-yellow-500/70 text-sm mt-2 tracking-widest">Turn the page</p>
      </motion.div>
    </section>
  );
}