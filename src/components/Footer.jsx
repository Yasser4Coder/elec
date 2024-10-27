import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#F3F4F6] border-t border-[#E5E7EB]">
      <div className="container mx-auto px-4 py-8 md:py-12">
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
                <h1
                  href="#"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Home
                </h1>
              </li>
              <li>
                <h1
                  href="#"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  About Us
                </h1>
              </li>
              <li>
                <h1
                  href="#"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Events
                </h1>
              </li>
              <li>
                <h1
                  href="#"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Activities
                </h1>
              </li>
              <li>
                <h1
                  href="#"
                  className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  Members
                </h1>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2563EB]">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <h1
                href="#"
                className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </h1>
              <h1
                href="#"
                className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </h1>
              <h1
                href="#"
                className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </h1>
              <h1
                href="#"
                className="text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-[#4B5563]" />
              <a
                href="mailto:contact@electricclub.edu"
                className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors"
              >
                contact@electricclub.edu
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#E5E7EB] text-center">
          <p className="text-sm text-[#4B5563]">
            © {new Date().getFullYear()} Elec Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
