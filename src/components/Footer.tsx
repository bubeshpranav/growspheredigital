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
                src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776121269/Untitled_design_3_u0uflj.svg" 
                alt="GrowSphere Logo" 
                className="h-12 w-auto" 
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              GrowSphere is a premium digital marketing agency dedicated to helping brands scale with performance-driven strategies and creative excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/growsphere_.digital/" },
                { Icon: Linkedin, href: "#" },
                { Icon: MessageCircle, href: "https://wa.me/9080762984" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#E50914" }}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 transition-all"
                >
                  <social.Icon size={20} />
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
                <img 
                  src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776121567/email-svgrepo-com_sxl77c.svg" 
                  alt="Email" 
                  className="w-5 h-5" 
                  style={{ filter: 'invert(13%) sepia(94%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(116%)' }}
                  referrerPolicy="no-referrer"
                />
                <a href="mailto:growspheredigital26@gmail.com" className="hover:text-brand transition-colors">growspheredigital26@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <img 
                  src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776121809/phone-svgrepo-com_t05ifx.svg" 
                  alt="Phone" 
                  className="w-5 h-5" 
                  style={{ filter: 'invert(13%) sepia(94%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(116%)' }}
                  referrerPolicy="no-referrer"
                />
                <a href="tel:+91 9080762984" className="hover:text-brand transition-colors">+91 9080762984</a>
              </li>
              <li className="flex items-center space-x-3">
                <img 
                  src="https://res.cloudinary.com/dhjfoibdf/image/upload/q_auto/f_auto/v1776121912/whatsapp-whats-app-svgrepo-com_gu1oah.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5" 
                  style={{ filter: 'invert(13%) sepia(94%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(116%)' }}
                  referrerPolicy="no-referrer"
                />
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
