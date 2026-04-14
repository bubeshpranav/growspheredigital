import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Revolution",
    industry: "Fashion Retail",
    results: "3x Revenue Growth",
    image: "https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776125858/0c6ab908-e1ff-49f5-9336-74d06c376cd2_ylra0x.png",
  },
  {
    title: "SaaS Market Entry",
    industry: "Tech Startup",
    results: "150% Lead Increase",
    image: "https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776125806/0e6f2e83-071c-435b-9b27-bcd6459d7183_h7qdzf.png",
  },
  {
    title: "Local Brand Scaling",
    industry: "Food & Beverage",
    results: "50k+ New Followers",
    image: "https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776126064/619c7dd9-053d-4b22-b28a-426840a2a6a1_f1x3vw.png",
  },
  {
    title: "B2B Lead Generation",
    industry: "Manufacturing",
    results: "40% Lower CPL",
    image: "https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776126177/dd218866-7de8-45f5-9f51-e137e4141a93_gy4qht.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand font-bold uppercase tracking-widest text-xs"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
            >
              Our Work
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-slate-200 text-slate-700 font-bold hover:border-brand hover:text-brand transition-all"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand/20 backdrop-blur-md text-brand text-xs font-bold uppercase tracking-wider border border-brand/30">
                    {project.industry}
                  </span>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-brand font-extrabold text-lg">{project.results}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
