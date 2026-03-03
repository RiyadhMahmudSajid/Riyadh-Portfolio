import React from 'react';
import { Github, Linkedin, Mail, Heart, Facebook } from 'lucide-react';
import { socialLinks } from '../mock';


const Footer = () => {
  const socialIcons = {
    Facebook: Facebook,
    Linkedin: Linkedin,
    Twitter: Mail
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-emerald-500/20 py-12 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-gray-400">
              Building modern web applications with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label={social.name}
                  >
                    {IconComponent && <IconComponent className="h-6 w-6" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;