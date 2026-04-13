import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="mb-8 block">
              <img 
                src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776092560/Growsphere_logo_design_in_black_and_red_v57jlc.png" 
                alt="GrowSphere Logo" 
                className="h-12 w-auto" 
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              GrowSphere is a premium digital marketing agency dedicated to helping brands scale with performance-driven strategies and creative excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#E50914" }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Brand Strategy</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3">
                <span className="text-brand font-bold">E:</span>
                <a href="mailto:growspheredigital26@gmail.com" className="hover:text-brand transition-colors">growspheredigital26@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand font-bold">P:</span>
                <a href="tel:+91 9080762984" className="hover:text-brand transition-colors">+91 9080762984</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand font-bold">W:</span>
                <a href="https://wa.me/9080762984" className="hover:text-brand transition-colors">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} GrowSphere Digital Agency. All rights reserved.
          </p>
          <div className="flex space-x-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
