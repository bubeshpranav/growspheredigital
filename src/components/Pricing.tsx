import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "$999",
    description: "Perfect for small businesses looking to establish their online presence.",
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Optimization",
      "Monthly Performance Report",
      "Email Support",
      "Content Creation (4 posts/mo)",
    ],
    highlight: false,
  },
  {
    name: "Growth Plan",
    price: "$2,499",
    description: "Our most popular plan designed for rapidly scaling companies.",
    features: [
      "Social Media Management (4 platforms)",
      "Advanced SEO & Keyword Strategy",
      "Google Ads Management",
      "Bi-weekly Strategy Calls",
      "Content Creation (12 posts/mo)",
      "Email & WhatsApp Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "Tailored marketing solutions for large-scale organizations.",
    features: [
      "Full Digital Marketing Suite",
      "Custom Web Development",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Unlimited Content Creation",
      "Conversion Rate Optimization",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-bold uppercase tracking-widest text-xs"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
          >
            Choose Your Growth Path
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] flex flex-col h-full ${
                plan.highlight 
                  ? "bg-slate-900 text-white shadow-2xl shadow-brand/20 scale-105 z-10" 
                  : "bg-white text-slate-900 border border-slate-100"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-4 ${plan.highlight ? "text-brand" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500 font-medium">/mo</span>}
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? "bg-brand/20 text-brand" : "bg-brand/10 text-brand"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.highlight 
                    ? "bg-brand text-white shadow-xl shadow-brand/30 hover:bg-brand-dark" 
                    : "bg-soft-grey text-slate-900 hover:bg-brand hover:text-white"
                }`}
              >
                Get Started Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
