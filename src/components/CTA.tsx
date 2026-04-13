import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Grow Your <span className="text-brand text-glow">Business?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
              Join 500+ successful brands that have scaled their revenue with our performance-driven marketing strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-brand text-white font-bold flex items-center space-x-2 shadow-2xl shadow-brand/40 hover:bg-brand-dark transition-all"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={20} />
                </motion.button>
              </a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/9080762984"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold flex items-center space-x-2 hover:bg-white/20 transition-all"
              >
                <MessageCircle size={22} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
