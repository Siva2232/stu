// import { useState, useEffect } from "react";
// import Container from "../components/common/Container";
// import Button from "../components/common/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, ChevronDown, BookOpen } from "lucide-react";

// const bookPages = [
//   "https://www.qinprinting.com/wp-content/uploads/2023/11/How-to-design-a-fashion-Lookbook.jpg",
//   "https://tint.creativemarket.com/osxOgNL0eRmABvZB978DpC7R75F0Kps22Xa9Ses3ESk/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUxMjMvNTEyMzcvNTEyMzc4MjMvMDgtby5qcGcjMTcyMzA5NDg3OQ?1723094879",
//   "https://i0.wp.com/xirimirimagazine.com/wp-content/uploads/2024/10/Fashion_Photography_Portfolio.jpg?fit=1200%2C628&ssl=1",
//   "https://tint.creativemarket.com/LAiv0G-LlIef4GokSNcHaWLU_awfya0aowFB-hMeT70/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUyMTgvNTIxODcvNTIxODc1ODYvMDEtcXVpbm4tcG9ydGZvbGlvLSUyOGxvb2tib29rLW1hZ2F6aW5lJTI5LXRlbXBsYXRlLWJ5LXN0dWRpby1kYXJhLW8uanBnIzE3MzI1MjczMzA?1732527330",
//   "https://designworklife.com/wp-content/uploads/2025/03/lookbook-hero-shot.png",
//   "https://assets.vogue.com/photos/610a7f1a159535dcd92adfb9/master/w_2560%2Cc_limit/vo0921_cover_4x5_logo_spread.jpg",
// ];

// export default function HeroBook() {
//   const [page, setPage] = useState(0);

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPage((prev) => (prev + 1) % bookPages.length);
//     }, 6000); // 6 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const nextPage = () => {
//     setPage((prev) => (prev + 1) % bookPages.length);
//   };

//   const prevPage = () => {
//     setPage((prev) => (prev - 1 + bookPages.length) % bookPages.length);
//   };

//   const goToPage = (index) => {
//     setPage(index);
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black">
//       {/* Subtle Paper Texture */}
//       <div 
//         className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
//         style={{
//           backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"200\" height=\"200\" filter=\"url(%23noise)\" opacity=\"0.4\"/%3E%3C/svg%3E')",
//         }}
//       />

//       <Container className="relative z-10 flex min-h-screen flex-col justify-between py-8 px-4 sm:px-6">
//         {/* Top Label */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col items-center gap-3 mt-8 text-yellow-500"
//         >
//           <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
//           <p className="text-xs sm:text-sm uppercase tracking-[0.4em] font-medium text-center">
//             Perfect Digital Press Studio Cooperative Portfolio
//           </p>
//         </motion.div>

//         {/* Main Book Image */}
//         <div className="relative w-full max-w-4xl mx-auto flex-1 flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={page}
//               initial={{ rotateY: 70, opacity: 0, scale: 0.85 }}
//               animate={{ rotateY: 0, opacity: 1, scale: 1 }}
//               exit={{ rotateY: -70, opacity: 0, scale: 0.85 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className="relative w-full aspect-[4/5] sm:aspect-[16/10] max-w-xl sm:max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-4xl"
//               style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
//             >
//               <img
//                 src={bookPages[page]}
//                 alt={`Portfolio spread ${page + 1}`}
//                 className="w-full h-full object-cover"
//               />

//               {/* Dark Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />

//               {/* Content Overlay */}
//               <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-12 text-center sm:text-left">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6, duration: 0.8 }}
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
//                 >
//                   Curated <br />
//                   <span className="text-yellow-500">Excellence</span>
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.9, duration: 0.8 }}
//                   className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-md mx-auto sm:mx-0"
//                 >
//                   Turn the pages of our collaborative artistry — where models, photographers, and creatives craft timeless editorial stories.
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.2 }}
//                   className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
//                 >
//                   <Button className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl">
//                     Explore Portfolio
//                   </Button>
//                   <Button className="border-2 border-yellow-500/60 text-white px-8 py-4 rounded-full text-lg sm:text-xl backdrop-blur hover:bg-yellow-500/10 transition-all">
//                     Learn More
//                   </Button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Manual Navigation Arrows */}
//           <button
//             onClick={prevPage}
//             className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl z-20"
//             aria-label="Previous page"
//           >
//             <ChevronLeft size={28} />
//           </button>

//           <button
//             onClick={nextPage}
//             className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl z-20"
//             aria-label="Next page"
//           >
//             <ChevronRight size={28} />
//           </button>

//           {/* Auto-slide Indicator Dots */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {bookPages.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToPage(idx)}
//                 className={`transition-all duration-500 ${
//                   idx === page
//                     ? "w-10 h-2 bg-yellow-500 rounded-full"
//                     : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/70"
//                 }`}
//                 aria-label={`Go to page ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Bottom Scroll Cue */}
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="text-center pb-8"
//         >
//           <ChevronDown size={36} className="text-yellow-500 mx-auto drop-shadow-lg" />
//           <p className="text-yellow-500/70 text-xs sm:text-sm mt-2 tracking-widest">
//             Scroll to discover
//           </p>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }



import { useState, useEffect } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Heart,BookOpen } from "lucide-react";

const weddingPages = [
  "https://thelane.com/wp-content/uploads/2022/02/Sophie-Tim-Reedit-4-scaled.jpg",
  "https://susanstripling.com/wp-content/uploads/2024/01/08-oheka-castle-wedding-nighttime-sunset-wedding-photo-bride-and-groom.jpg",
  "https://jaidynmichele.com/wp-content/uploads/sites/32630/2023/05/BZ7A0337-1024x719.jpg",
  "https://susanstripling.com/wp-content/uploads/2023/09/wedding-couple-in-the-rain-central-park-wedding-photography-scaled-e1706900815692.jpg",
  "https://whimsical-cdn.wedissimo.com/2025/11/Black-and-White-Wedding-Photos.jpg",
  "https://www.printique.com/wp-content/uploads/2019/06/wedding-poses-3.jpg",
];

export default function HeroBook() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % weddingPages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <Container className="relative z-10 min-h-screen flex flex-col justify-between py-6 sm:py-10 px-4">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mt-8 text-yellow-500"
        >
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] font-medium text-center">
            Perfect Digital Press Studio Cooperative Portfolio
          </p>
        </motion.div>

        {/* Image Book */}
        <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/5] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={weddingPages[page]}
                alt="Wedding moment"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />

              {/* TEXT OVERLAY */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10 sm:pb-10 text-center sm:text-left">
                
                {/* Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl">
                  Every Love Story{" "}
                  <span className="block sm:inline text-yellow-400">
                    Is Beautiful
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
                  We don’t just photograph weddings — we preserve the feeling of
                  your once-in-a-lifetime day forever.
                </p>

                {/* Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button className="bg-yellow-500 text-black px-6 py-4 sm:px-8 sm:py-5 rounded-full text-sm sm:text-lg font-bold hover:bg-yellow-400 transition">
                    View Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/40 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-full text-sm sm:text-lg"
                  >
                    Check Availability
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => setPage((p) => (p - 1 + weddingPages.length) % weddingPages.length)}
            className="absolute left-2 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => setPage((p) => (p + 1) % weddingPages.length)}
            className="absolute right-2 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="text-center pb-6">
          <ChevronDown className="mx-auto text-yellow-400 animate-bounce" />
          <p className="text-[10px] sm:text-xs tracking-widest text-yellow-400/70 mt-2">
            SCROLL TO EXPLORE
          </p>
        </div>
      </Container>
    </section>
  );
}
