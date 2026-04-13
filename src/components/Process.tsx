import { motion } from "motion/react";
import { ClipboardList, Search, Play, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Strategy & Planning",
    description: "We define clear objectives and develop a roadmap for your success.",
    icon: ClipboardList,
  },
  {
    title: "Market Research",
    description: "Deep dive into your industry, competitors, and target audience.",
    icon: Search,
  },
  {
    title: "Campaign Execution",
    description: "Launching high-impact campaigns across selected digital channels.",
    icon: Play,
  },
  {
    title: "Optimization",
    description: "Continuous monitoring and refinement for peak performance.",
    icon: Settings,
  },
  {
    title: "Business Growth",
    description: "Achieving measurable results and scaling your brand presence.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-soft-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-xs"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
          >
            Our Proven Process
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand/10 -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-brand relative z-10 border-4 border-soft-grey group-hover:bg-brand group-hover:text-white transition-all">
                    <step.icon size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
