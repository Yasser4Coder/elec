import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#F3F4F6] border-t border-[#E5E7EB]">
      <motion.div
        className="container mx-auto px-4 py-8 md:py-12"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2563EB]">Elec Club</h3>
            <p className="text-sm text-[#4B5563]">
              Sparking innovation and powering the future of electrical
              engineering.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2563EB]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#event"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Events
                </a>
              </li>
              {/*<li>
                <a
                  href="#activities"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Activities
                </a>
              </li>*/}
              <li>
                <a
                  href="#members"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Members
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2563EB]">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/@elec.msila28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  href="#"
                  className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </h1>
              </a>
              <a
                href="https://www.instagram.com/elec_club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  href="#"
                  className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </h1>
              </a>
              <a
                href="https://www.linkedin.com/company/elec-club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  href="#"
                  className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </h1>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-[#4B5563]" />
              <a
                href="mailto:elec.club28@gmail.com"
                className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                elec.club28@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#E5E7EB] text-center">
          <p className="text-sm text-[#4B5563]">
            © {new Date().getFullYear()} Elec Club. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
