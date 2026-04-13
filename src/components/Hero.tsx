import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent blur-3xl" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-20 -z-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" 
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider"
          >
            Growth Focused Agency
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Digital Marketing That Grows Your <span className="text-brand">Business Faster</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            We help brands scale with powerful marketing strategies, creative design, and performance-driven campaigns.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-brand text-white font-bold flex items-center space-x-2 shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all"
              >
                <span>Get a Quote</span>
                <ArrowRight size={20} />
              </motion.button>
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/9080762984"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold flex items-center space-x-2 hover:border-brand hover:text-brand transition-all shadow-sm"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-slate-900">500+ Happy Clients</p>
              <p className="text-slate-500">Trusted by businesses worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Illustration/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
            <img
              src="https://picsum.photos/seed/marketing-dashboard/800/600"
              alt="Marketing Dashboard"
              className="rounded-2xl w-full h-auto"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ArrowRight className="-rotate-45" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Revenue Growth</p>
                  <p className="text-lg font-bold text-slate-900">+142%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">New Leads</p>
                  <p className="text-lg font-bold text-slate-900">1,284</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
            <div className="absolute top-0 left-0 w-full h-full border border-brand/10 rounded-full animate-pulse" />
            <div className="absolute top-10 left-10 w-[calc(100%-80px)] h-[calc(100%-80px)] border border-brand/5 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
