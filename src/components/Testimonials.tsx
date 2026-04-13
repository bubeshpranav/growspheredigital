import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxe Decor",
    role: "CEO",
    review: "GrowSphere transformed our online presence. Our sales increased by 200% within the first six months of working with them. Their team is professional, creative, and results-driven.",
    photo: "https://picsum.photos/seed/sarah/200/200",
  },
  {
    name: "Michael Chen",
    company: "TechFlow",
    role: "Marketing Director",
    review: "The best marketing agency we've ever partnered with. Their data-driven approach to SEO and Google Ads has significantly lowered our customer acquisition cost while increasing lead quality.",
    photo: "https://picsum.photos/seed/michael/200/200",
  },
  {
    name: "Emma Williams",
    company: "FreshBites",
    role: "Founder",
    review: "Incredible attention to detail and a deep understanding of brand strategy. They didn't just run ads; they helped us redefine who we are as a brand and how we connect with our customers.",
    photo: "https://picsum.photos/seed/emma/200/200",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-xs"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-brand/10">
            <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative z-10 bg-soft-grey p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-10">
                  "{testimonials[currentIndex].review}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-brand font-semibold text-sm">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 flex space-x-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-brand w-8" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
