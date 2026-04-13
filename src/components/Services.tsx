import { motion } from "motion/react";
import { 
  Search, 
  Share2, 
  BarChart3, 
  Globe, 
  FileText, 
  Zap, 
  ShoppingCart, 
  TrendingUp 
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description: "Rank higher on search engines and drive organic traffic to your website.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across all social platforms.",
    icon: Share2,
  },
  {
    title: "Google Ads Management",
    description: "Reach your target audience instantly with high-converting PPC campaigns.",
    icon: BarChart3,
  },
  {
    title: "Website Design & Development",
    description: "Custom, high-performance websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Content Marketing",
    description: "Strategic content that tells your story and establishes authority in your niche.",
    icon: FileText,
  },
  {
    title: "Brand Strategy",
    description: "Define your brand identity and positioning for long-term market success.",
    icon: Zap,
  },
  {
    title: "E-commerce Marketing",
    description: "Scale your online store with specialized marketing for e-commerce brands.",
    icon: ShoppingCart,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Maximize your ROI by optimizing every step of your customer journey.",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-xs"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
          >
            Our Digital Marketing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            Comprehensive marketing solutions tailored to your business goals and designed for maximum impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
