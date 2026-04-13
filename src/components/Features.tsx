import { motion } from "motion/react";
import { CheckCircle2, Target, Users, BarChart, Headset, Rocket } from "lucide-react";

const features = [
  {
    title: "Data-driven strategies",
    description: "We use advanced analytics to inform every decision and optimize your campaigns.",
    icon: BarChart,
  },
  {
    title: "ROI focused campaigns",
    description: "Our primary goal is to generate measurable returns for your marketing investment.",
    icon: Target,
  },
  {
    title: "Expert marketing team",
    description: "Work with seasoned professionals who stay ahead of digital marketing trends.",
    icon: Users,
  },
  {
    title: "Transparent reporting",
    description: "Get clear, detailed reports that show exactly how your campaigns are performing.",
    icon: CheckCircle2,
  },
  {
    title: "Fast support",
    description: "Our team is always available to answer your questions and provide assistance.",
    icon: Headset,
  },
  {
    title: "Scalable marketing solutions",
    description: "Marketing strategies that grow with your business, from startup to enterprise.",
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-xs"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
          >
            The GrowSphere Advantage
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand/30 transition-all group overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10" />
              
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-brand text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <CheckCircle2 size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
