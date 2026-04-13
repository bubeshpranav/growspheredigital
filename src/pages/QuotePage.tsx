import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "SEO Optimization",
  "Social Media Marketing",
  "Google Ads Management",
  "Website Design & Development",
  "Content Marketing",
  "Brand Strategy",
  "E-commerce Marketing",
  "Conversion Rate Optimization",
];

const budgets = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    companyName: "",
    message: ""
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          phoneNumber: `${formData.phoneCode} ${formData.phoneNumber}`,
          services: selectedServices,
          budget: selectedBudget,
          type: "quote"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Quote request sent successfully!");
        setFormData({ fullName: "", email: "", phoneCode: "", phoneNumber: "", companyName: "", message: "" });
        setSelectedServices([]);
        setSelectedBudget("");
      } else {
        throw new Error(data.error || "Failed to send request");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="flex items-center space-x-2 text-slate-600 hover:text-brand transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776092560/Growsphere_logo_design_in_black_and_red_v57jlc.png" 
              alt="GrowSphere Logo" 
              className="h-10 w-auto" 
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#4F29B9] mb-4">
            Get a Free Quote
          </h1>
          <p className="text-slate-500 text-lg">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <select 
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all text-slate-600 appearance-none cursor-pointer"
              >
                <option value="">Select Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Services Required */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-700">Services Required:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedServices.includes(service)
                      ? "border-[#4F29B9] bg-[#4F29B9]/5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#4F29B9]"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className="text-slate-600 font-medium">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Budget */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-700">Project Budget:</h3>
            <div className="flex flex-wrap gap-4">
              {budgets.map((budget) => (
                <label
                  key={budget}
                  className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedBudget === budget
                      ? "border-[#4F29B9] bg-[#4F29B9]/5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="budget"
                    className="w-5 h-5 accent-[#4F29B9]"
                    checked={selectedBudget === budget}
                    onChange={() => setSelectedBudget(budget)}
                  />
                  <span className="text-slate-600 font-medium">{budget}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Project Details"
              className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-[#4F29B9] focus:ring-2 focus:ring-[#4F29B9]/10 outline-none transition-all placeholder:text-slate-400 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === "loading"}
            className={`w-full md:w-auto px-12 py-5 rounded-full bg-[#4F29B9] text-white font-bold flex items-center justify-center space-x-3 shadow-xl shadow-[#4F29B9]/30 hover:bg-[#3D1F91] transition-all ${
              status === "loading" ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <span>{status === "loading" ? "Sending..." : "Submit Request"}</span>
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
      </div>
    </div>
  );
}
