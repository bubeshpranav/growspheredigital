import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "contact"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand font-bold uppercase tracking-widest text-xs"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8"
            >
              Let's Start Your <span className="text-brand">Success Story</span>
            </motion.h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-soft-grey flex items-center justify-center text-brand shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-bold text-slate-900">growspheredigital26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-soft-grey flex items-center justify-center text-brand shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-bold text-slate-900">+91 9080762984</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-soft-grey flex items-center justify-center text-brand shadow-sm">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-xl font-bold text-slate-900">+91 9080762984</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-soft-grey p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm scroll-mt-24"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Your Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
                className={`w-full py-5 rounded-2xl bg-brand text-white font-bold flex items-center justify-center space-x-3 shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                <Send size={20} />
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-50 text-emerald-700 flex items-center space-x-3"
                >
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">{statusMessage}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-50 text-red-700 flex items-center space-x-3"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">{statusMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
